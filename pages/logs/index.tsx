import Head from 'next/head';
import {
  baseUrl,
  logsTitle as title,
  logsDescription as description,
} from '@/lib/metaData';

import Logs from '@/components/Logs';
import Layout from '@/components/Layout';

import fetchLogs from '@/lib/fetchLogs';
import { Log } from '@/lib/types';

export default function Page({ logs }: { logs: Log[] }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${baseUrl}/OGP-top.webp`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${baseUrl}/logs`} />
        <link rel='canonical' href={`${baseUrl}/logs`} />
      </Head>
      <Logs logs={logs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const logs = await fetchLogs();

  return {
    props: { logs },
  };
}
