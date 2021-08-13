import { Github, Zenn } from '@icons-pack/react-simple-icons';
import Logo from '../public/logo.svg';

type TLogType = 'GitHub' | 'Portfolio' | 'Zenn';

type Props = {
  showOnTop: boolean;
  logType: TLogType;
  date: string;
  body: string;
};

export default function Log({ showOnTop, logType, date, body }: Props) {
  return (
    <div className='py-2'>
      <div className='flex mb-1'>
        <Icon logType={logType} />
        <div className='mx-2 font-medium leading-5 text-gray-600'>
          {logType}
        </div>
        <div className='text-sm text-gray-400'>{date}</div>
      </div>
      <h3 className='text-sm leading-relaxed text-gray-600 lg:text-base'>
        {body}
      </h3>
    </div>
  );
}

function Icon({ logType }: { logType: TLogType }) {
  switch (logType) {
    case 'GitHub':
      return <Github color='#181717' size={18} />;
    case 'Portfolio':
      return <Logo width={17} />;
    case 'Zenn':
      return <Zenn color='#3EA8FF' size={18} />;
  }
}
