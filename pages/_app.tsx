import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='icon alternate' href='/favicon.ico' type='image/png' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#ffffff' />
        <meta property='og:site_name' content='Reo Kanzaki - Portfolio' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
