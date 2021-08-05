import BusinessCard from '../components/BusinessCard';
import Activities from '../components/Activities';

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-10 md:grid-cols-[minmax(300px,400px)minmax(300px,1fr)]'>
      <BusinessCard />
      <Activities />
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
