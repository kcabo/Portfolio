'use client';

import useSWR from 'swr';
import { SiGithub } from '@icons-pack/react-simple-icons';

import RichLinkButton from './RichLinkButton';
import { toDate } from '@/lib/dateUtil';

export function OpenGithub({ url }: { url: string }) {
  const repoUpdateDate = useRepoDate(url);

  return (
    <RichLinkButton
      icon={<SiGithub size={40} />}
      mainText='View on Github'
      subText={`Last push: ${repoUpdateDate}`}
      buttonType='github'
      url={url}
    />
  );
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
