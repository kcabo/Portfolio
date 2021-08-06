import WorkCard from '../../components/WorkCard';

export default function Works() {
  return (
    <div className=''>
      <div className='mb-8'>
        <h1 className='mb-2 text-2xl font-bold text-gray-600'>My Works</h1>
        <p className='text-gray-400'>
          これまでに開発したアプリ・ツールの一覧です。
        </p>
      </div>
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
