import Link from 'next/link';

type Props = {
  icon: React.ReactElement;
  mainText: string;
  subText: string;
  buttonType: string;
  url: string;
};

export default function RichLinkButton({ icon, mainText, subText, buttonType, url }: Props) {
  return (
    <Link
      href={url}
      className={
        'flex w-[280px] rounded-lg shadow-lg hover:opacity-90 lg:w-full ' +
        (buttonType == 'github'
          ? 'border border-gray-300 bg-white text-gray-600'
          : 'bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white')
      }
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='p-4'>{icon}</div>
      <div className='flex flex-col justify-center'>
        <div className='mb-2 leading-none font-medium'>{mainText}</div>
        <div className='w-52 truncate text-sm leading-none opacity-80'>{subText}</div>
      </div>
    </Link>
  );
}
