import styles from '../../styles/RichLinkButton.module.css';

type Props = {
  icon: React.ReactElement;
  mainText: string;
  subText: string;
  buttonType: string;
};

export default function RichLinkButton({
  icon,
  mainText,
  subText,
  buttonType,
}: Props) {
  let styleClassName = '';

  if (buttonType == 'github') {
    styleClassName = styles.github;
  } else {
    styleClassName = styles.homepage;
  }

  return (
    <div className={'flex rounded-lg shadow-lg ' + styleClassName}>
      <div className='p-4'>{icon}</div>
      <div className='flex flex-col justify-center'>
        <div className='mb-2 font-medium leading-none'>{mainText}</div>
        <div className='text-sm leading-none opacity-80'>{subText}</div>
      </div>
    </div>
  );
}
