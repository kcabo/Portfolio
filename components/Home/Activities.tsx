import HomeCaption from './HomeCaption';
import LogItem from '@/components/Log';

import { Log } from '@/lib/types';

// 高さをピクセルで指定してあるのはトラックの高さ一杯にカードを広げるため。
export default function Activities({ logs }: { logs: Log[] }) {
  return (
    <div className=''>
      <HomeCaption caption='Recent Activities' allLink='/logs' />
      <div className='overflow-y-auto rounded-lg bg-white px-5 py-3 shadow-lg md:h-[184px] lg:h-[207.21px]'>
        {logs
          .filter((log) => log.showOnTop)
          .map((log, index) => (
            <LogItem key={index} log={log} />
          ))}
      </div>
      {/* <style jsx>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background: #d1d5db;
        }
      `}</style> */}
    </div>
  );
}
