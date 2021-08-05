import Image from 'next/image';

export default function WorkCard() {
  return (
    <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
      <div className='relative w-full h-48 border-b border-gray-300'>
        <Image
          src='/tim.png'
          alt='サムネイル'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='p-5'>
        <div className='mb-3 text-lg font-medium text-gray-600'>TiM</div>
        <div className='mb-6 text-gray-500'>
          部活でタイムを管理するためのLINE
          Bot。対話形式でタイムを入力し、CSVに出力。
        </div>
        <div className='flex flex-wrap gap-3'>
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className='px-4 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full'>
      #LINE
    </div>
  );
}
