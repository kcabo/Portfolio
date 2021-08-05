import Image from 'next/image';

export default function BusinessCard() {
  return (
    <div className='flex rounded-lg shadow-lg bg-[#292938] before:block before:pt-golden-main overflow-hidden'>
      <div className='flex flex-col justify-center pl-8 w-golden-main'>
        <div className='mb-4 text-white'>
          <p className='text-xl font-bold lg:text-2xl'>Reo Kanzaki</p>
          <p className='-mt-1 font-light opacity-50 lg:text-xl'>
            web developer
          </p>
        </div>
        <div className=''>
          <img
            alt='Commit Count'
            src='https://img.shields.io/badge/Commits(2021)-112-blue'
            className='mb-2'
          />
          <img
            alt='Last commit'
            src='https://img.shields.io/badge/Last%20commit-2021--07--30-blue'
          />
        </div>
      </div>
      <div className='relative w-golden-rest'>
        <Image
          src='/me.webp'
          alt='あーなたーとわーたしーが'
          layout='fill'
          objectFit='contain'
        />
      </div>
    </div>
  );
}
