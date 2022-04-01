import { ReactNode } from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};

const OutlineButton = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={`border-4 rounded-xl border-slate-700 text-slate-700 px-3 py-1 hover:bg-slate-700 hover:text-slate-200 transition-colors ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
