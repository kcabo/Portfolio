import { Zenn } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

export default function Activities() {
  return (
    <div className=''>
      <div className='flex items-baseline mb-3'>
        <h2 className='mr-5 text-xl font-medium text-gray-600'>
          Recent Activities
        </h2>
        <Link href='/logs'>
          <a className='text-sm font-medium text-gray-400 hover:underline'>
            View all →
          </a>
        </Link>
      </div>
      {/* トラックの高さ一杯にカードを広げる。見出しの高さを抜く */}
      <div className='h-[184px] lg:h-[207.21px] p-5 bg-white rounded-lg shadow-lg overflow-y-scroll'>
        <Log />
        <Log />
      </div>
    </div>
  );
}

function Log() {
  return (
    <div className='mb-4'>
      <div className='flex'>
        <Zenn color='#3EA8FF' size={18} />
        {/* <img src='/logo.svg' alt='' width={18} /> */}
        <div className='mx-2 font-medium leading-5 text-gray-600'>Zenn</div>
        <div className='text-sm text-gray-400'>2021-07-12</div>
      </div>
      <h3 className='text-gray-600'>
        「Github 周りのいい感じのバッジが欲しい」を投稿しました。
      </h3>
    </div>
  );
}
