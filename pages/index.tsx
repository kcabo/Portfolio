import Head from 'next/head';
import Home from '@/components/Home';

import fetchUpdates from '@/lib/fetchUpdates';
import fetchSelectedWorks from '@/lib/fetchSelectedWorks';
import { Log, WorkResponse } from '@/lib/types';

export default function Page({
  logs,
  selectedWorks,
}: {
  logs: Log[];
  selectedWorks: WorkResponse[];
}) {
  return (
    <>
      <Head>
        <title>Reo Kanzaki | Portfolio</title>
      </Head>
      <Home logs={logs} selectedWorks={selectedWorks} />
    </>
  );
}

export async function getStaticProps() {
  const logs = await fetchUpdates();
  const selectedWorks = await fetchSelectedWorks();

  return {
    props: { logs, selectedWorks },
  };
}
