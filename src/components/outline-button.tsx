import { ReactNode } from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

const OutlineButton = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={`border-4 rounded-xl px-3 py-1 border-primary-500 bg-primary-300/20 text-primary-500 hover:text-primary-50 hover:bg-primary-500/90 transition-colors ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
