import { Octokit } from '@octokit/core';
import { toDate } from '@/lib/dateUtil';
import { ContributionsResponse } from '@/lib/types';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN || '';
const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

export async function fetchLatestPushDate() {
  try {
    const response = await octokit.request('GET /users/{username}/events', {
      username: 'kcabo',
    });

    // Eventの配列のうち、一番最初のPushEventが最新のもの
    const latestPush = response.data.find((event) => event.type === 'PushEvent');
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
    const response = await octokit.graphql<ContributionsResponse>(
      `query ($startFrom: DateTime!) {
        viewer {
          contributionsCollection(from: $startFrom) {
            totalCommitContributions
          }
        }
      }`,
      { startFrom: `${year}-01-01T00:00:00Z` },
    );

    const totalCommit = response.viewer.contributionsCollection.totalCommitContributions;

    if (!totalCommit) throw new Error('Response has no payload');

    return String(totalCommit);
  } catch (e) {
    console.error(e);
    return '-';
  }
}
