import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const config = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number =>
  config.theme.screens[value].slice(
    0,
    config.theme.screens[value].indexOf('px')
  );

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint: string;
  let biggestBreakpointValue = 0;
  for (const breakpoint of Object.keys(config.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};
