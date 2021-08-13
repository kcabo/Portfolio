import BusinessCard from '../components/Home/BusinessCard';
import Activities from '../components/Home/Activities';
import SelectedWorks from '../components/Home/SelectedWorks';
import Log from '../components/Log';

export default function Home() {
  return (
    <div className='grid px-8 grid-cols-1 gap-10 md:grid-cols-[minmax(300px,400px)minmax(300px,1fr)]'>
      <BusinessCard />
      <Activities>
        <Log
          showOnTop={true}
          logType='Zenn'
          date='2020-21-1'
          body='「Github 周りのいい感じのバッジが欲しい」を投稿しました。'
        />
        <Log showOnTop={true} logType='Portfolio' date='2020-21-1' body='aaa' />
      </Activities>
      <div className='md:col-span-2'>
        <SelectedWorks />
      </div>
    </div>
  );
}
