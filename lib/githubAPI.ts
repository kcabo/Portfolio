import { Octokit } from '@octokit/core';
import { toDate } from '@/lib/dateUtil';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN || '';
const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

export async function fetchLatestPushDate() {
  const response = await octokit.request('GET /users/{username}/events', {
    username: 'kcabo',
  });

  // Eventの配列のうち、一番最初のPushEventが最新のもの
  const latestPush = response.data.find((event) => event.type === 'PushEvent');

  const dateString = latestPush?.created_at;

  return dateString ? toDate(dateString) : '-';
}
