import type { Metadata } from 'next';

import WorkItem from '@/components/WorkItem';
import fetchWorkItem from '@/lib/fetchWorkItem';
import { fetchWorksOnlyID } from '@/lib/fetchWorks';

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;
export const dynamic = 'force-static';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const work = await fetchWorkItem(id);

  if (!work) {
    return {
      title: 'ページが見つかりません',
      description: 'お探しのページは存在しません。',
    };
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      url: `https://kcabo.vercel.app/works/${work.id}`,
      images: [work.coverImage.url],
      type: 'article',
    },
    twitter: {
      images: [work.coverImage.url],
    },
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const workIds = await fetchWorksOnlyID();
  return workIds.map((work) => ({ id: work.id }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const work = await fetchWorkItem(id);

  if (!work) {
    return { notFound: true };
  }

  return <WorkItem work={work} />;
}
