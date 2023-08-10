import React from 'react';
import { ThemeToggle } from './toggle';
import { useTheme } from 'next-themes';

export const Header = () => {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <header className="flex  w-full py-4 px-6 lg:px-[150px] justify-between items-center">
        {theme === 'dark' ? (
          <img src="/images/logo.png" height={48} width={48} />
        ) : (
          <img src="/images/logo.png" height={48} width={48} />
        )}
        <ThemeToggle className="z-10" />
      </header>
    </React.Fragment>
  );
};
