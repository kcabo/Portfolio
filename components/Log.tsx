import { Zenn } from '@icons-pack/react-simple-icons';

export default function Log() {
  return (
    <div className='py-2'>
      <div className='flex mb-1'>
        <Zenn color='#3EA8FF' size={18} />
        {/* <img src='/logo.svg' alt='' width={18} /> */}
        <div className='mx-2 font-medium leading-5 text-gray-600'>Zenn</div>
        <div className='text-sm text-gray-400'>2021-07-12</div>
      </div>
      <h3 className='text-sm leading-relaxed text-gray-600 lg:text-base'>
        「Github 周りのいい感じのバッジが欲しい」を投稿しました。
      </h3>
    </div>
  );
}
