import Image from 'next/image';
import { useState } from 'react';
import Badges from './Badges';

export default function BusinessCard() {
  const [animation, setAnimation] = useState(false);
  function handleCardClick() {
    setAnimation((prevState) => !prevState);
  }
  return (
    <div
      className={
        'flex overflow-hidden rounded-lg shadow-lg bg-[#292938] before:block before:pt-golden-main ' +
        (animation ? 'animate-jello-horizontal' : '')
      }
      onClick={handleCardClick}
    >
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
