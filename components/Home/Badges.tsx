import Image from 'next/image';

const BADGE_ENDPOINT = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_MOCKUP_URL || '';

export default function Badges() {
  return (
    <div className='space-y-2'>
      <Image
        alt='Commit Count'
        src={`https://img.shields.io/endpoint?url=https%3A%2F%2F${BADGE_ENDPOINT}%2Fapi%2Fcommit-count`}
        className='h-5 w-auto'
        height={0}
        width={0}
        unoptimized
      />
      <Image
        alt='Last commit'
        src={`https://img.shields.io/endpoint?url=https%3A%2F%2F${BADGE_ENDPOINT}%2Fapi%2Flast-commit`}
        className='h-5 w-auto'
        height={0}
        width={0}
        unoptimized
      />
    </div>
  );
}
