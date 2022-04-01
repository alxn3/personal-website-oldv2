import Nav from 'components/nav';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Alex Lin</title>
        <meta name="description" content="Alex's Website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-[min(90%,78rem)] mx-auto">
        <Nav />
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
