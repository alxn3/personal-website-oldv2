import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const HighlightedText = ({ children }: Props) => {
  return (
    <span className="transition-colors text-primary-200 hover:text-primary-500 dark:text-primary-500 dark:hover:text-primary-200">
      {children}
    </span>
  );
};

export default HighlightedText;
