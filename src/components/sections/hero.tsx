import OutlineButton from 'components/outline-button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-[min(14vw,7rem)] leading-none">
        <div className="mb-12 space-y-2">
          <p className="text-[0.3em] font-bold text-accent-800 dark:text-accent-300">
            Hello there.
          </p>
          <h1 className="font-semibold text-primary-200 dark:text-primary-700">
            I&apos;m{' '}
            <span className="font-bold text-primary-800 dark:text-primary-200">
              Alex Lin
            </span>
          </h1>
          <h2 className="text-[0.5em] text-secondary-900 dark:text-secondary-300">
            Lorem, ipsum dolor.
          </h2>
          <p className="text-[0.25em] font-normal text-slate-900/80 dark:text-slate-200/80 leading-[1.1em] py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            corrupti repellat sit adipisci dignissimos non eveniet.
          </p>
        </div>
        <OutlineButton className="block leading-normal text-[0.25em] border-primary-600 bg-primary-300/10 text-primary-600 hover:text-primary-50 hover:bg-primary-700">
          <Link href="/">Learn more.</Link>
        </OutlineButton>
      </div>
    </div>
  );
};

export default Hero;