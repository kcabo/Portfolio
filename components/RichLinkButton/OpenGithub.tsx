import RichLinkButton from './RichLinkButton';
import { Github } from '@icons-pack/react-simple-icons';

export function OpenGithub() {
  return (
    <RichLinkButton
      icon={<Github size={40} />}
      mainText='View code on Github'
      subText='last commit: 2020-08-14'
      buttonType='github'
    />
  );
}
