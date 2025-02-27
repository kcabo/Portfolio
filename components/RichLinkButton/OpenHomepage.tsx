import RichLinkButton from './RichLinkButton';
import { LinkIcon } from '@heroicons/react/20/solid';

export function OpenHomepage({ url }: { url: string }) {
  return (
    <RichLinkButton
      icon={<LinkIcon className='stroke-0.5 size-10 stroke-white' />}
      mainText='Visit Homepage'
      subText={url.replace(/https?:\/\//, '')}
      buttonType='homepage'
      url={url}
    />
  );
}
