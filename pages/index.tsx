import BusinessCard from '@/components/Home/BusinessCard';
import Activities from '@/components/Home/Activities';
import SelectedWorks from '@/components/Home/SelectedWorks';
import LogItem from '@/components/Log';

import fetchUpdates from '@/lib/fetchUpdates';
import { Log } from '@/lib/types';

export default function Home({ logs }: { logs: Log[] }) {
  return (
    <div className='grid px-8 grid-cols-1 gap-10 md:grid-cols-[minmax(300px,400px)minmax(300px,1fr)]'>
      <BusinessCard />
      <Activities>
        {logs
          .filter((log) => log.showOnTop)
          .map((log, index) => (
            <LogItem key={index} log={log} />
          ))}
      </Activities>
      <div className='md:col-span-2'>
        <SelectedWorks />
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
