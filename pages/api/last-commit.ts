import type { NextApiRequest, NextApiResponse } from 'next';

import { fetchLatestPushDate } from '@/lib/githubAPI';
import { ShieldsIoCustomBadge } from '@/lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShieldsIoCustomBadge>
) {
  const lastCommitDate = await fetchLatestPushDate();

  const badgeData: ShieldsIoCustomBadge = {
    schemaVersion: 1,
    label: 'Last commit',
    message: lastCommitDate,
    color: '#0496FF',
    cacheSeconds: 3600,
  };

  res.status(200).json(badgeData);
}
