import { NextResponse } from 'next/server';

import { fetchCommitCount } from '@/lib/githubAPI';
import { ShieldsIoCustomBadge } from '@/lib/types';
import { nowYear } from '@/lib/dateUtil';

export async function GET() {
  const year = nowYear();

  const commitCount = await fetchCommitCount(year);

  const badgeData: ShieldsIoCustomBadge = {
    schemaVersion: 1,
    label: `Commits in ${year}`,
    message: commitCount,
    color: '#0496FF',
    cacheSeconds: 3600,
  };

  return NextResponse.json(badgeData);
}
