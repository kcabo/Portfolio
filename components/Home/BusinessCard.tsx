import Image from 'next/image';
import Badges from './Badges';

export default function BusinessCard() {
  return (
    <div className='flex overflow-hidden rounded-lg bg-[#292938] shadow-lg before:block before:pt-[61.8%]'>
      <div className='flex w-[61.8%] flex-col justify-center pl-6 md:pl-9'>
        <div className='mb-4 text-white'>
          <h1 className='text-xl font-bold lg:text-2xl'>Reo Kanzaki</h1>
          <p className='-mt-1 font-light opacity-50 lg:text-xl'>web developer</p>
        </div>
        <Badges />
      </div>
      <div className='relative w-[38.3%]'>
        <Image src='/me.avif' alt='神崎伶央' fill className='object-cover' />
      </div>
    </div>
  );
}
