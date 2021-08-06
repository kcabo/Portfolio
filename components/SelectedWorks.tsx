import HomeCaption from './HomeCaption';
import WorkCard from './WorkCard';

export default function SelectedWorks() {
  return (
    <div className=''>
      <HomeCaption caption='Selected Works' allLink='/works' />
      {/* トラックの高さ一杯にカードを広げる。見出しの高さを抜く */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}
