import LogItem from '@/components/Log';
import PageTitle from '@/components/PageTitle';

import { Log } from '@/lib/types';

export default function Logs({ logs }: { logs: Log[] }) {
  return (
    <main className='container mx-auto xl:max-w-screen-lg'>
      <div className='bg-white p-6 md:rounded-lg'>
        <PageTitle title='Logs' sub='Zennへの投稿・サイトの更新などの活動の記録' />
        <div className='flex flex-col gap-2'>
          {logs.map((log, index) => (
            <LogItem key={index} log={log} />
          ))}
        </div>
      </div>
    </main>
  );
}
