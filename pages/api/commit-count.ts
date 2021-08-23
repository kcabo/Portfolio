import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchCommitCount } from '@/lib/githubAPI';
import { BadgeJsonSchema } from '@/lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BadgeJsonSchema>
) {
  const year = 2021;
  const commitCount = await fetchCommitCount(year);
  const jsonSchema: BadgeJsonSchema = {
    schemaVersion: 1,
    label: `Commits in ${year}`,
    message: commitCount,
    color: '#0496FF',
    cacheSeconds: 3600,
  };
  res.status(200).json(jsonSchema);
}
