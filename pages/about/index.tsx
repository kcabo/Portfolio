import Image from 'next/image';

export default function About() {
  return (
    <div className='p-10 bg-white'>
      <Image src='/me.webp' width={200} height={200} objectFit='cover' />
      <div>
        <h1 className='text-2xl font-bold text-gray-600'>神崎 伶央</h1>
      </div>
    </div>
  );
}
