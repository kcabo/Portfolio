import { Github, Zenn } from '@icons-pack/react-simple-icons';
import Logo from '../public/logo.svg';
import styles from '../styles/Log.module.css';

type TLogType = 'GitHub' | 'Portfolio' | 'Zenn';

type Props = {
  logType: TLogType;
  date: string;
  body: string;
};

export default function Log({ logType, date, body }: Props) {
  return (
    <div className='py-1.5'>
      <div className='flex items-center mb-1'>
        <Icon logType={logType} />
        <div className='mx-2 font-medium leading-5 text-gray-600'>
          {logType}
        </div>
        <div className='text-sm text-gray-400'>{date}</div>
      </div>
      <div
        className={'text-sm text-gray-600 lg:text-base ' + styles.content}
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </div>
  );
}

function Icon({ logType }: { logType: TLogType }) {
  switch (logType) {
    case 'GitHub':
      return <Github color='#181717' size={18} />;
    case 'Portfolio':
      return <Logo width={16} />;
    case 'Zenn':
      return <Zenn color='#3EA8FF' size={18} />;
  }
}
