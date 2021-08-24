import Image from 'next/image';
import Badges from './Badges';

export default function BusinessCard() {
  return (
    <div className='flex rounded-lg shadow-lg bg-[#292938] before:block before:pt-golden-main overflow-hidden'>
      <div className='flex flex-col justify-center pl-6 md:pl-9 w-golden-main'>
        <div className='mb-4 text-white'>
          <h1 className='text-xl font-bold lg:text-2xl'>Reo Kanzaki</h1>
          <p className='-mt-1 font-light opacity-50 lg:text-xl'>
            web developer
          </p>
        </div>
        <Badges />
      </div>
      <div className='relative w-golden-rest'>
        <Image
          src='/me.webp'
          alt='あーなたーとわーたしーが'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  );
}
