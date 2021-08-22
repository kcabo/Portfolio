import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchLatestPushDate } from '@/lib/githubAPI';
import { BadgeJsonSchema } from '@/lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BadgeJsonSchema>
) {
  const lastCommitDate = await fetchLatestPushDate();
  const jsonSchema: BadgeJsonSchema = {
    schemaVersion: 1,
    label: 'Last commit',
    message: lastCommitDate,
    color: '#0496FF',
  };
  res.status(200).json(jsonSchema);
}
