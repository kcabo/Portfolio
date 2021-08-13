import HomeCaption from './HomeCaption';
import { ReactElement } from 'react';

// Logのコンポーネント群を受け取る
// 高さをピクセルで指定してあるのはトラックの高さ一杯にカードを広げるため。
export default function Activities({ children }: { children: ReactElement[] }) {
  return (
    <div className=''>
      <HomeCaption caption='Recent Activities' allLink='/logs' />
      <div className='md:h-[184px] lg:h-[207.21px] px-5 py-3 bg-white rounded-lg shadow-lg overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}
