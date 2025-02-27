import LogItem from '@/components/Log';
import PageTitle from '@/components/PageTitle';

import { Log } from '@/lib/types';

export default function Logs({ logs }: { logs: Log[] }) {
  return (
    <main
      // ヘッダーとフッター分の高さを引く
      className='container mx-auto min-h-[calc(100vh-150px-320px)] xl:max-w-screen-lg'
    >
      <div className='bg-white p-10 md:rounded-lg'>
        <PageTitle
          title='Logs'
          sub='活動記録です。主要なリポジトリの更新・Zennへの記事投稿・当サイトの更新が含まれます。'
        />
        <div className='flex flex-col gap-2'>
          {logs.map((log, index) => (
            <LogItem key={index} log={log} />
          ))}
        </div>
      </div>
    </main>
  );
}
