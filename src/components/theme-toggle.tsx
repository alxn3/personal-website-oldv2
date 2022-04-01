import { useEffect } from 'react';
import { RiMoonFill, RiMoonLine, RiSunFill, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const MEDIA = '(prefers-color-scheme: dark)';
    const setSystem = () => setTheme('system');
    const media = window.matchMedia(MEDIA);
    media.addEventListener('change', setSystem);
    return () => media.removeEventListener('change', setSystem);
  }, [setTheme]);

  return (
    <button
      onClick={() =>
        setTheme(
          theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')
            ? 'light'
            : 'dark'
        )
      }
    >
      <div className="absolute opacity-0 hover:opacity-100 transition-opacity">
        <RiSunFill className="block dark:hidden" />
        <RiMoonFill className="hidden dark:block" />
      </div>
      <div>
        <RiSunLine className="block dark:hidden" />
        <RiMoonLine className="hidden dark:block" />
      </div>
    </button>
  );
};

export default ThemeToggle;
