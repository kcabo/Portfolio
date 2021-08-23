import RichLinkButton from './RichLinkButton';
import { Github } from '@icons-pack/react-simple-icons';
import { useRepoDate } from '@/lib/githubAPI';

export function OpenGithub({ url }: { url: string | undefined }) {
  if (!url) return <></>;
  const repoUpdateDate = useRepoDate(url);

  return (
    <RichLinkButton
      icon={<Github size={40} />}
      mainText='View code on Github'
      subText={`Last push: ${repoUpdateDate}`}
      buttonType='github'
      url={url}
    />
  );
}
