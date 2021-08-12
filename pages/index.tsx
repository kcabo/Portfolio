import BusinessCard from '../components/BusinessCard';
import Activities from '../components/Activities';
import SelectedWorks from '../components/SelectedWorks';

export default function Home() {
  return (
    <div className='grid px-8 grid-cols-1 gap-10 md:grid-cols-[minmax(300px,400px)minmax(300px,1fr)]'>
      <BusinessCard />
      <Activities />
      <div className='md:col-span-2'>
        <SelectedWorks />
      </div>
    </div>
  );
}
