import Link from 'next/link';

type Props = {
  icon: React.ReactElement;
  mainText: string;
  subText: string;
  buttonType: string;
  url: string;
};

export default function RichLinkButton({
  icon,
  mainText,
  subText,
  buttonType,
  url,
}: Props) {
  return (
    <Link href={url}>
      <a
        className={
          'flex rounded-lg shadow-lg min-w-[280px] ' +
          (buttonType == 'github'
            ? 'text-gray-600 border border-gray-300 bg-white'
            : 'text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff]')
        }
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='p-4'>{icon}</div>
        <div className='flex flex-col justify-center'>
          <div className='mb-2 font-medium leading-none'>{mainText}</div>
          <div className='text-sm leading-none opacity-80'>{subText}</div>
        </div>
      </a>
    </Link>
  );
}
