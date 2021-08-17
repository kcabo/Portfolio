import WorkCard from '@/components/WorkCard';
import PageTitle from '@/components/PageTitle';

export default function Works() {
  return (
    <div className='px-8'>
      <PageTitle
        title='My Works'
        sub='これまでに開発したアプリ・ツールの一覧です。'
      />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}
