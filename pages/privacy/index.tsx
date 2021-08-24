import Head from 'next/head';
import {
  baseUrl,
  privacyTitle as title,
  privacyDescription as description,
} from '@/lib/metaData';
import Privacy from '@/components/Privacy';

export default function Page() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${baseUrl}/OGP-top.webp`} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={`${baseUrl}/privacy`} />
        <link rel='canonical' href={`${baseUrl}/privacy`} />
      </Head>
      <Privacy />
    </>
  );
}
