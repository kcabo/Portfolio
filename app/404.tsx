import Head from 'next/head';
import { baseUrl, notFoundTitle as title } from '@/lib/metaData';

import NotFound from '@/components/NotFound';
import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel='canonical' href={`${baseUrl}/404`} />
      </Head>
      <NotFound />
    </Layout>
  );
}
