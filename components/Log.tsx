import { SiGithub, SiZenn } from '@icons-pack/react-simple-icons';
import Logo from '@/components/Logo';

import { Log, LogCategory } from '@/lib/types';

export default function LogItem({ log }: { log: Log }) {
  return (
    <div className='py-2'>
      <div className='mb-1.5 flex items-end'>
        <Icon category={log.category} />
        <div className='mx-2 leading-none font-medium text-gray-600'>{log.category}</div>
        <div className='text-sm leading-none text-gray-500'>{log.date}</div>
      </div>
      <div
        className='colored-link text-sm text-gray-600 lg:text-base'
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
      return <SiGithub color='#181717' size={16} />;
    case 'Portfolio':
      return <Logo width={15} />;
    case 'Zenn':
      return <SiZenn color='#3EA8FF' size={16} />;
  }
}
