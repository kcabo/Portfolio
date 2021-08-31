import Head from 'next/head';
import { baseUrl } from '@/lib/metaData';
import WorkItem from '@/components/WorkItem';
import PreviewAlert from '@/components/PreviewAlert';

import fetchWorkItem from '@/lib/fetchWorkItem';
import { fetchWorksOnlyID } from '@/lib/fetchWorks';
import { WorkResponse } from '@/lib/types';

export default function Page({
  work,
  preview,
}: {
  work: WorkResponse;
  preview: boolean;
}) {
  return (
    <>
      <Head>
        <title>{work.title + ' | Reo Kanzaki'}</title>
        <meta name='description' content={work.description} />
        <meta property='og:description' content={work.description} />
        <meta property='og:title' content={work.title + ' | Reo Kanzaki'} />
        <meta property='og:image' content={work.coverImage.url} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`${baseUrl}/works/${work.id}`} />
        <link rel='canonical' href={`${baseUrl}/works/${work.id}`} />
      </Head>
      {preview && <PreviewAlert />}
      <WorkItem work={work} />
    </>
  );
}

export async function getStaticPaths() {
  const workIds = await fetchWorksOnlyID();

  const paths = workIds.map(({ id }) => ({
    params: { id: id },
  }));

  // ビルド時に生成されてないページ(公開前のプレビュー)を受けたら、都度SSRする
  // ページが生成されるまでブロックする。router.isFallbackは使用したくない
  return { paths, fallback: 'blocking' };
}

// NOTE: プレビューモード時でもフェッチは一回で十分ではないか？
export async function getStaticProps({
  params,
  preview,
  previewData,
}: {
  params: { id: string };
  preview?: boolean; // プレビューモード時にtrue
  previewData?: { id: string; draftKey: string };
}) {
  let work: WorkResponse | null;

  if (preview && previewData) {
    work = await fetchWorkItem(previewData.id, previewData.draftKey);
  } else {
    work = await fetchWorkItem(params.id);
  }

  if (work) {
    return { props: { work, preview: preview ?? false } };
  } else {
    return { notFound: true };
  }
}
