import BusinessCard from '../components/BusinessCard';

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-home'>
      <BusinessCard />
      <Card />
      <div className='md:col-span-2'>
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className='bg-blue-500 rounded-lg'>
      <div>Piyo</div>
    </div>
  );
}
