import type { Metadata } from 'next';

import Logs from '@/components/Logs';
import fetchLogs from '@/lib/fetchLogs';

export const metadata: Metadata = {
  title: 'Logs | Reo Kanzaki',
  description: 'これまでの主な活動の記録',
  openGraph: {
    title: 'Logs | Reo Kanzaki',
    description: 'これまでの主な活動の記録',
    url: 'https://kcabo.vercel.app/logs',
  },
};

export default async function Page() {
  const logs = await fetchLogs();

  return <Logs logs={logs} />;
}
