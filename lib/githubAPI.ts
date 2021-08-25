import { Octokit } from '@octokit/core';
import { toDate } from '@/lib/dateUtil';
import useSWR from 'swr';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN || '';
const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

export async function fetchLatestPushDate() {
  try {
    const response = await octokit.request('GET /users/{username}/events', {
      username: 'kcabo',
    });

    // Eventの配列のうち、一番最初のPushEventが最新のもの
    const latestPush = response.data.find(
      (event) => event.type === 'PushEvent'
    );
    if (!latestPush) throw new Error('Push Event not found');

    const dateString = latestPush?.created_at;
    if (!dateString) throw new Error('argument "created_at" not found');

    return toDate(dateString);
  } catch (e) {
    console.error(e);
    return '-';
  }
}

export async function fetchCommitCount(year: number) {
  try {
    const response: any = await octokit.graphql(
      `query ($startFrom: DateTime!) {
        viewer {
          contributionsCollection(from: $startFrom) {
            totalCommitContributions
          }
        }
      }`,
      { startFrom: `${year}-01-01T00:00:00Z` }
    );

    const totalCommit =
      response?.viewer.contributionsCollection.totalCommitContributions;

    if (!totalCommit) throw new Error('Response has no payload');

    return String(totalCommit);
  } catch (e) {
    console.error(e);
    return '-';
  }
}

export function useRepoDate(repoURL: string) {
  const url = toAPIURL(repoURL);

  const { data, error } = useSWR(url, safeFetcher, {
    revalidateOnFocus: false, // ウィンドウがフォーカスされたときに自動的に再検証しない
    dedupingInterval: 600000, // 10分以内のリクエストを重複として排除
    errorRetryCount: 2,
  });

  if (error) {
    return 'error!';
  } else if (!error && !data) {
    return 'Loading...';
  } else if (data?.pushed_at) {
    return toDate(data.pushed_at);
  } else {
    return '-';
  }
}

async function safeFetcher(url: string) {
  if (!url) throw new Error('URL not set');
  const res = await window.fetch(url);
  const json = await res.json();
  return json;
}

function toAPIURL(repoURL: string) {
  const { owner, repo } = extractRepoName(repoURL);
  if (!owner) return null;
  return `https://api.github.com/repos/${owner}/${repo}`;
}

function extractRepoName(repoURL: string) {
  const re = /https?:\/\/github.com\/([A-Za-z0-9_.-]*)\/([A-Za-z0-9_.-]*)/;
  const match = repoURL.match(re);

  // owner と repo情報をURLから検出できない可能性もある
  if (!match || match.length != 3) {
    return {
      owner: null,
      repo: null,
    };
  } else {
    return {
      owner: match[1],
      repo: match[2],
    };
  }
}
