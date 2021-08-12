import WorkCard from './WorkCard';

export default function RelatedWorks() {
  return (
    <div className=''>
      <h2 className='mb-6 text-2xl font-bold text-gray-600'>関連する作品</h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1'>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}
