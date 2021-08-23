import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name='description' content='神崎伶央のポートフォリオサイト' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#ffffff' />
        {/* <meta property='og:title' content='ページのタイトル' />
        <meta property='og:description' content='ページの説明文' />
        <meta property='og:image' content='https://mywebsite.com/image.jpg' />
        <meta property='og:image:alt' content='画像の説明文' />
        <meta property='og:locale' content='ja_JP' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:url' content='https://mywebsite.com/page' />
        <link rel='canonical' href='https://mywebsite.com/page' /> */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
