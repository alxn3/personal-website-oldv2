import { ReactNode } from 'react';

type Props = {
  id?: string;
  className?: string;
  header: string | ReactNode;
  children?: ReactNode;
};

const Section = ({ id, className, header, children }: Props) => {
  return (
    <section id={id} className={`text-xl py-56 ${className || ''}`}>
      <h1 className="text-6xl font-bold text-primary-400 mb-4">{header}</h1>
      {children}
    </section>
  );
};

export default Section;
