import { Github, Zenn } from '@icons-pack/react-simple-icons';
import Logo from '../public/logo.svg';
import styles from '@/styles/Log.module.css';

import { Log, LogCategory } from '@/lib/types';

export default function LogItem({ log }: { log: Log }) {
  return (
    <div className='py-1.5'>
      <div className='flex items-center mb-1'>
        <Icon category={log.category} />
        <div className='mx-2 font-medium leading-5 text-gray-600'>
          {log.category}
        </div>
        <div className='text-sm text-gray-400'>{log.date}</div>
      </div>
      <div
        className={'text-sm text-gray-600 lg:text-base ' + styles.content}
        dangerouslySetInnerHTML={{
          __html: log.body,
        }}
      />
    </div>
  );
}

function Icon({ category }: { category: LogCategory }) {
  switch (category) {
    case 'GitHub':
      return <Github color='#181717' size={18} />;
    case 'Portfolio':
      return <Logo width={16} />;
    case 'Zenn':
      return <Zenn color='#3EA8FF' size={18} />;
  }
}
