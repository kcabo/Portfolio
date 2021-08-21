import type { NextApiRequest, NextApiResponse } from 'next';

import { Octokit } from '@octokit/core';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN || '';
const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

async function fetchLatestPushDate() {
  const response = await octokit.request('GET /users/{username}/events', {
    username: 'kcabo',
  });

  const latestPush = response.data.find((event) => event.type === 'PushEvent');

  const dateString = latestPush?.created_at;

  return dateString ? toJSTDate(dateString) : '-';
}

function toJSTDate(dateString: string) {
  const jst = new Date(dateString).toLocaleString('ja-JP');
  return jst.split(' ')[0];
}

type Response = {
  schemaVersion: 1;
  label: string;
  message: string;
  color: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const date = await fetchLatestPushDate();
  res.status(200).json({
    schemaVersion: 1,
    label: 'Last commit',
    message: date,
    color: '#0496FF',
  });
}
