import WorkCard from '@/components/WorkCard';
import PageTitle from '@/components/PageTitle';

import { WorkResponse } from '@/lib/types';

export default function Works({ works }: { works: WorkResponse[] }) {
  return (
    <div className='px-8'>
      <PageTitle
        title='Works'
        sub='これまでに開発したアプリ・ツールの一覧です。'
      />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {works.map((work, index) => (
          <WorkCard key={index} data={work} />
        ))}
      </div>
    </div>
  );
}
