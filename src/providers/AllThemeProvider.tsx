import { CommonProviderProps } from './provider.interface';
import { ThemeProvider } from 'styled-components';
import {
  ThemeSwitcherConsumer,
  ThemeSwitcherProvider,
} from 'src/context/ThemeSwitcher/ThemeSwitcher.context';
import { theme } from 'src/theme';
import React from 'react';
import useThemeSwitcher from 'src/hooks/useThemeSwitcher';

const AllThemeProvider = ({ children }: CommonProviderProps) => {
  const themeSwitcher = useThemeSwitcher();

  return (
    <ThemeSwitcherProvider value={themeSwitcher}>
      <ThemeSwitcherConsumer>
        {({ theme: themeType }) => {
          return (
            <ThemeProvider theme={theme[themeType]}>{children}</ThemeProvider>
          );
        }}
      </ThemeSwitcherConsumer>
    </ThemeSwitcherProvider>
  );
};

export default AllThemeProvider;
