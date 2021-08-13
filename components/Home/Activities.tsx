import HomeCaption from './HomeCaption';
import Log from '../Log';

export default function Activities() {
  return (
    <div className=''>
      <HomeCaption caption='Recent Activities' allLink='/logs' />
      {/* トラックの高さ一杯にカードを広げる。見出しの高さを抜く */}
      <div className='md:h-[184px] lg:h-[207.21px] px-5 py-3 bg-white rounded-lg shadow-lg overflow-y-auto'>
        <Log />
        <Log />
      </div>
    </div>
  );
}
