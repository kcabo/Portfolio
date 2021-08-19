import Head from 'next/head';

import LogItem from '@/components/Log';
import PageTitle from '@/components/PageTitle';

import fetchUpdates from '@/lib/fetchUpdates';
import { Log } from '@/lib/types';

export default function Page({ logs }: { logs: Log[] }) {
  return (
    <div className='px-8'>
      <Head>
        <title>Activity Logs - Reo Kanzaki</title>
      </Head>
      <PageTitle
        title='Logs'
        sub='主要なGitHubリポジトリの更新・Zennへの記事投稿・ポートフォリオのページ追加の情報一覧'
      />
      <div className='flex flex-col gap-2'>
        {logs.map((log, index) => (
          <LogItem key={index} log={log} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const logs = await fetchUpdates();

  return {
    props: { logs },
  };
}
