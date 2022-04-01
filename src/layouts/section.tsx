import { ReactNode } from 'react';

type Props = {
  className?: string;
  header: string | ReactNode;
  children?: ReactNode;
};

const Section = ({ className, header, children }: Props) => {
  return (
    <div
      className={`text-xl my-56 ${
        className || ''
      }`}
    >
      <h1 className="text-6xl font-bold text-primary-400 mb-4">{header}</h1>
      {children}
    </div>
  );
};

export default Section;
