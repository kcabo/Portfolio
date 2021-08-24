import Head from 'next/head';
import {
  baseUrl,
  homeTitle as title,
  homeDescription as description,
} from '@/lib/metaData';
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
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${baseUrl}/OGP-top.webp`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${baseUrl}`} />
        <link rel='canonical' href={`${baseUrl}`} />
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
