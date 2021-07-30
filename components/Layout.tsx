import { ReactNode } from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Test Page</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <main className='p-10'>{children}</main>
    </>
  );
}
