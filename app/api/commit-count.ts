import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchCommitCount } from '@/lib/githubAPI';
import { ShieldsIoCustomBadge } from '@/lib/types';
import { nowYear } from '@/lib/dateUtil';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShieldsIoCustomBadge>
) {
  const year = nowYear();

  const commitCount = await fetchCommitCount(year);

  const badgeData: ShieldsIoCustomBadge = {
    schemaVersion: 1,
    label: `Commits in ${year}`,
    message: commitCount,
    color: '#0496FF',
    cacheSeconds: 3600,
  };

  res.status(200).json(badgeData);
}
