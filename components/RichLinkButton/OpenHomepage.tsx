import RichLinkButton from './RichLinkButton';
import { LinkIcon } from '@heroicons/react/solid';

export function OpenHomepage() {
  return (
    <RichLinkButton
      icon={<LinkIcon className='w-10' />}
      mainText='Visit Homepage'
      subText='kcabo.github.io/Sunae/'
      buttonType='homepage'
    />
  );
}
