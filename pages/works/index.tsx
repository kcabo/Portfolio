import Head from 'next/head';
import Works from '@/components/Works';

import fetchWorks from '@/lib/fetchWorks';
import { WorkResponse } from '@/lib/types';

export default function Page({ works }: { works: WorkResponse[] }) {
  return (
    <>
      <Head>
        <title>Works</title>
      </Head>
      <Works works={works} />
    </>
  );
}

export async function getStaticProps() {
  const works = await fetchWorks();

  return {
    props: { works },
  };
}
