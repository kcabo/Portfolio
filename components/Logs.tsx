import LogItem from '@/components/Log';
import PageTitle from '@/components/PageTitle';

import { Log } from '@/lib/types';

export default function Logs({ logs }: { logs: Log[] }) {
  return (
    <div className='p-10 bg-white md:rounded-lg'>
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
