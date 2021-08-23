import Head from 'next/head';
import Logs from '@/components/Logs';

import fetchUpdates from '@/lib/fetchUpdates';
import { Log } from '@/lib/types';

export default function Page({ logs }: { logs: Log[] }) {
  return (
    <>
      <Head>
        <title>Logs</title>
      </Head>
      <Logs logs={logs} />
    </>
  );
}

export async function getStaticProps() {
  const logs = await fetchUpdates();

  return {
    props: { logs },
  };
}
