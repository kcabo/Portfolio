import Head from 'next/head';
import About from '@/components/About';

export default function Page() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <About />
    </>
  );
}
