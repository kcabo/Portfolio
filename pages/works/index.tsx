import Head from 'next/head';
import {
  baseUrl,
  worksTitle as title,
  worksDescription as description,
} from '@/lib/metaData';

import Works from '@/components/Works';
import Layout from '@/components/Layout';

import fetchWorks from '@/lib/fetchWorks';
import { WorkResponse } from '@/lib/types';

export default function Page({ works }: { works: WorkResponse[] }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${baseUrl}/OGP-top.webp`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${baseUrl}/works`} />
        <link rel='canonical' href={`${baseUrl}/works`} />
      </Head>
      <Works works={works} />
    </Layout>
  );
}

export async function getStaticProps() {
  const works = await fetchWorks();

  return {
    props: { works },
  };
}
