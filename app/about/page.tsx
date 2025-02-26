import Head from 'next/head';
import {
  baseUrl,
  aboutTitle as title,
  aboutDescription as description,
} from '@/lib/metaData';

import About from '@/components/About';
import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${baseUrl}/OGP-top.webp`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${baseUrl}/about`} />
        <link rel='canonical' href={`${baseUrl}/about`} />
      </Head>
      <About />
    </Layout>
  );
}
