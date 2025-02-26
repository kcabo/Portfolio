import BusinessCard from '@/components/Home/BusinessCard';
import Activities from '@/components/Home/Activities';
import SelectedWorks from '@/components/Home/SelectedWorks';

import { Log, WorkResponse } from '@/lib/types';

export default function Home({ logs, selectedWorks }: { logs: Log[]; selectedWorks: WorkResponse[] }) {
  return (
    <main className='container mx-auto min-h-[calc(100vh-150px-320px)] xl:max-w-screen-lg'>
      <div className='grid grid-cols-1 gap-10 px-8 md:grid-cols-[minmax(300px,400px)minmax(300px,1fr)]'>
        <BusinessCard />
        <Activities logs={logs} />
        <div className='md:col-span-2'>
          <SelectedWorks works={selectedWorks} />
        </div>
      </div>
    </main>
  );
}
