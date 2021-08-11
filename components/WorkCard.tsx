import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function WorkCard() {
  return (
    <Link href='/works/[id]' as='/works/abc'>
      <a>
        <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
          <div className='relative w-full h-48 border-b border-gray-300'>
            <Image
              src='/tim.png'
              alt='サムネイル'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='px-5 py-6'>
            <div className='flex mb-2 align-baseline'>
              <h4 className='mr-2 text-xl font-medium text-gray-600'>TiM</h4>
              <Link href='/'>
                <a className='px-1 pt-1'>
                  <ExternalLinkIcon className='w-5 h-5 text-gray-400' />
                </a>
              </Link>
            </div>
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
      </a>
    </Link>
  );
}

function Tag() {
  return (
    <div className='px-4 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full'>
      #LINE
    </div>
  );
}
