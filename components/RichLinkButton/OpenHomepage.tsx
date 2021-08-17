import RichLinkButton from './RichLinkButton';
import { LinkIcon } from '@heroicons/react/solid';

export function OpenHomepage({ url }: { url: string | undefined }) {
  if (!url) return <></>;
  return (
    <RichLinkButton
      icon={<LinkIcon className='w-10' />}
      mainText='Visit Homepage'
      subText={url.replace(/https?:\/\//, '')}
      buttonType='homepage'
      url={url}
    />
  );
}
