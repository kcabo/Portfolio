import Head from 'next/head';

import BusinessCard from '@/components/Home/BusinessCard';
import Activities from '@/components/Home/Activities';
import SelectedWorks from '@/components/Home/SelectedWorks';

import fetchUpdates from '@/lib/fetchUpdates';
import fetchSelectedWorks from '@/lib/fetchSelectedWorks';
import { Log, WorkResponse } from '@/lib/types';

export default function Home({
  logs,
  selectedWorks,
}: {
  logs: Log[];
  selectedWorks: WorkResponse[];
}) {
  return (
    <div className='grid px-8 grid-cols-1 gap-10 md:grid-cols-[minmax(300px,400px)minmax(300px,1fr)]'>
      <Head>
        <title>Reo Kanzaki | Portfolio</title>
      </Head>
      <BusinessCard />
      <Activities logs={logs} />
      <div className='md:col-span-2'>
        <SelectedWorks works={selectedWorks} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const logs = await fetchUpdates();
  const selectedWorks = await fetchSelectedWorks();

  return {
    props: { logs, selectedWorks },
  };
}
