import { NextResponse } from 'next/server';

import { fetchLatestPushDate } from '@/lib/githubAPI';
import { ShieldsIoCustomBadge } from '@/lib/types';

export async function GET() {
  const lastCommitDate = await fetchLatestPushDate();

  const badgeData: ShieldsIoCustomBadge = {
    schemaVersion: 1,
    label: 'Last commit',
    message: lastCommitDate,
    color: '#0496FF',
    cacheSeconds: 3600,
  };

  return NextResponse.json(badgeData);
}
