import BusinessCard from '../components/Home/BusinessCard';
import Activities from '../components/Home/Activities';
import SelectedWorks from '../components/Home/SelectedWorks';

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
