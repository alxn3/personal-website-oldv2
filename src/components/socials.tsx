import { ReactNode } from 'react';
import {
  RiGithubFill,
  RiGithubLine,
  RiLinkedinBoxFill,
  RiLinkedinBoxLine,
  RiMailFill,
  RiMailLine,
} from 'react-icons/ri';

const contact: {
  name: string;
  line: ReactNode;
  fill: ReactNode;
  url: string;
}[] = [
  {
    name: 'GitHub',
    line: <RiGithubLine />,
    fill: <RiGithubFill />,
    url: 'https://github.com/alxn3',
  },
  {
    name: 'LinkedIn',
    line: <RiLinkedinBoxLine />,
    fill: <RiLinkedinBoxFill />,
    url: 'https://www.linkedin.com/in/alexlin03/',
  },
  {
    name: 'Mail',
    line: <RiMailLine />,
    fill: <RiMailFill />,
    url: 'mailto:contact@alexlin.me',
  },
];

type Props = {
  className?: string;
  iconClassName?: string;
};

const Socials = ({ className, iconClassName }: Props) => {
  return (
    <div className={`flex space-x-3 ${className || ''}`}>
      {contact.map((elem, i) => (
        <span key={i} className={`inline-block group ${iconClassName || ''}`}>
          <a href={elem.url} title={elem.name} rel="noreferrer" target="_blank">
            <div className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0">
              {elem.fill}
            </div>
            <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              {elem.line}
            </div>
          </a>
        </span>
      ))}
    </div>
  );
};

export default Socials;
