import BusinessCard from '../components/BusinessCard';

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-[minmax(300px,400px)minmax(380px,1fr)]'>
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
