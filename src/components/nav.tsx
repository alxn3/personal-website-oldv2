import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { RiMenu4Fill } from 'react-icons/ri';
import { getBreakpointValue } from 'utils/tailwind';
import Socials from './socials';
import ThemeToggle from './theme-toggle';

const links: { name: string; url: string }[] = [
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Work',
    url: '#work',
  },
  {
    name: 'Projects',
    url: '#projects',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > getBreakpointValue('md')) {
        setIsOpen(false);
      }
    };
    window.onresize = handleResize;
    return () => {
      window.onresize = null;
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className=" flex flex-row flex-wrap items-center justify-between w-[min(90%,78rem)] mx-auto p-3 bg-white dark:bg-slate-900 transition-colors">
        <Link href="/">
          <a className="p-2">
            <span className="text-2xl font-bold tracking-wide text-black dark:text-white">
              Alex Lin
            </span>
          </a>
        </Link>
        <div className="flex flex-row items-center space-x-4 text-lg">
          <div className="flex-row items-center hidden space-x-4 font-semibold sm:flex">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                <a className="text-gray-700 transition-colors dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-400">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
          <div
            className={`h-full fixed top-0 right-0 flex flex-col bg-primary-800 text-secondary-100/80 transition-transform ease-in-out duration-300 w-[min(24rem,100%)] ${
              isOpen ? 'translate-x-0' : 'translate-x-[100%]'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-5xl">
              {links.map((link) => (
                <Link href={link.url} key={link.url}>
                  <a className="transition-colors hover:text-primary-50">
                    {link.name}
                  </a>
                </Link>
              ))}
              <Socials
                className="text-[0.8em]"
                iconClassName="hover:text-primary-50 transition-colors"
              />
            </div>
          </div>
          <div
            className={`z-10 flex flex-row space-x-2 text-xl ${
              isOpen && 'text-secondary-100/80'
            }`}
          >
            <ThemeToggle
              className={`transition-colors ${
                isOpen ? 'hover:text-primary-50' : 'hover:text-primary-400'
              }`}
            />
            <button
              className={`inline-block md:hidden transition-colors ${
                isOpen ? 'hover:text-primary-50' : 'hover:text-primary-400'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              ref={menuButton}
            >
              <RiMenu4Fill />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
