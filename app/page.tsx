import Home from '@/components/Home';

import fetchLogs from '@/lib/fetchLogs';
import fetchSelectedWorks from '@/lib/fetchSelectedWorks';

export default async function Page() {
  const logs = await fetchLogs();
  const selectedWorks = await fetchSelectedWorks();

  return <Home logs={logs} selectedWorks={selectedWorks} />;
}
