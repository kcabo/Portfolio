import Head from 'next/head';
import WorkItem from '@/components/WorkItem';

import fetchWorkItem from '@/lib/fetchWorkItem';
import { fetchWorksOnlyID } from '@/lib/fetchWorks';
import { WorkResponse } from '@/lib/types';

export default function Page({ work }: { work: WorkResponse }) {
  return (
    <>
      <Head>
        <title>{work.title}</title>
      </Head>
      <WorkItem work={work} />
    </>
  );
}

export async function getStaticPaths() {
  const workIds = await fetchWorksOnlyID();

  const paths = workIds.map(({ id }) => ({
    params: { id: id },
  }));

  // ビルド時に生成されないページは404とする
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const work = await fetchWorkItem(params.id);

  return {
    props: { work },
  };
}
