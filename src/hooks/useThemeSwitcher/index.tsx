import { ThemeSwitcherCtx } from 'src/context/ThemeSwitcher/themeSwitcher.interface';
import { useEffect, useState } from 'react';
import useLocalStorage from '../useLocalStorage';

export const THEME_STORAGE = 'theme';

const useThemeSwitcher = (): ThemeSwitcherCtx => {
  const { setStorageItem, getStorageItem } = useLocalStorage<
    ThemeSwitcherCtx['theme']
  >(THEME_STORAGE, 'light');
  const [theme, setTheme] = useState<ThemeSwitcherCtx['theme']>(() => 'light');

  const switchTheme = (theme: ThemeSwitcherCtx['theme']) => {
    setTheme(theme);
    setStorageItem(theme);
  };

  useEffect(() => {
    const item = getStorageItem();
    setTheme(item);
  }, []);

  return { theme, switchTheme };
};

export default useThemeSwitcher;
