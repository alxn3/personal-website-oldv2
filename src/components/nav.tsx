import Link from 'next/link';
import ThemeToggle from './theme-toggle';

const links: { name: string; url: string }[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

const Nav = () => {
  return (
    <nav className="flex flex-col flex-wrap items-center justify-between p-3 sm:flex-row">
      <Link href="/">
        <a className="p-2">
          <span className="text-2xl font-bold tracking-wide text-black dark:text-white">
            Alex Lin
          </span>
        </a>
      </Link>
      <div className="flex flex-row items-center space-x-4 text-lg font-semibold">
        {links.map((link) => (
          <Link href={link.url} key={link.url}>
            <a className="text-gray-700 transition-colors dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500">
              {link.name}
            </a>
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Nav;
