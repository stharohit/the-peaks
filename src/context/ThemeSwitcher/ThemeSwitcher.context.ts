import { ThemeSwitcherCtx } from './themeSwitcher.interface';
import { createContext, useContext } from 'react';

const ThemeSwitcherContext = createContext<ThemeSwitcherCtx>({
  switchTheme: () => null,
  theme: 'light',
});

const { Provider: ThemeSwitcherProvider, Consumer: ThemeSwitcherConsumer } =
  ThemeSwitcherContext;
const useThemeSwitcherContext = (): ThemeSwitcherCtx =>
  useContext(ThemeSwitcherContext);

export {
  ThemeSwitcherProvider,
  useThemeSwitcherContext,
  ThemeSwitcherConsumer,
};
