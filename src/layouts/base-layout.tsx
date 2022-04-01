import Nav from 'components/nav';
import Head from 'next/head';
import { ReactNode } from 'react';

type Props = {
  hero?: ReactNode;
  children?: ReactNode;
};

const BaseLayout = ({ hero, children }: Props) => {
  return (
    <>
      <Head>
        <title>Alex Lin</title>
        <meta name="description" content="Alex's Website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-[min(90%,78rem)] mx-auto">
        {hero ? (
          <div className="grid grid-rows-[auto,1fr] h-auto min-h-full">
            <Nav />
            <div>{hero}</div>
          </div>
        ) : (
          <Nav />
        )}
        {children}
      </main>
    </>
  );
};

export default BaseLayout;
