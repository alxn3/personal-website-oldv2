import { About, Hero, Work } from 'components/sections';
import BaseLayout from 'layouts/base-layout';

const Home = () => {
  return (
    <BaseLayout>
      <Hero />
      <About />
      <Work />
      <div className="flex flex-col h-full">
        <div className="grid h-full grid-cols-3">
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full bg-primary-50"></div>
            <div className="w-full h-full bg-primary-100"></div>
            <div className="w-full h-full bg-primary-200"></div>
            <div className="w-full h-full bg-primary-300"></div>
            <div className="w-full h-full bg-primary-400"></div>
            <div className="w-full h-full bg-primary-500"></div>
            <div className="w-full h-full bg-primary-600"></div>
            <div className="w-full h-full bg-primary-700"></div>
            <div className="w-full h-full bg-primary-800"></div>
            <div className="w-full h-full bg-primary-900"></div>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full bg-secondary-50"></div>
            <div className="w-full h-full bg-secondary-100"></div>
            <div className="w-full h-full bg-secondary-200"></div>
            <div className="w-full h-full bg-secondary-300"></div>
            <div className="w-full h-full bg-secondary-400"></div>
            <div className="w-full h-full bg-secondary-500"></div>
            <div className="w-full h-full bg-secondary-600"></div>
            <div className="w-full h-full bg-secondary-700"></div>
            <div className="w-full h-full bg-secondary-800"></div>
            <div className="w-full h-full bg-secondary-900"></div>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full bg-accent-50"></div>
            <div className="w-full h-full bg-accent-100"></div>
            <div className="w-full h-full bg-accent-200"></div>
            <div className="w-full h-full bg-accent-300"></div>
            <div className="w-full h-full bg-accent-400"></div>
            <div className="w-full h-full bg-accent-500"></div>
            <div className="w-full h-full bg-accent-600"></div>
            <div className="w-full h-full bg-accent-700"></div>
            <div className="w-full h-full bg-accent-800"></div>
            <div className="w-full h-full bg-accent-900"></div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
