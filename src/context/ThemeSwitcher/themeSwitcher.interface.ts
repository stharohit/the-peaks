export interface ThemeSwitcherCtx {
  switchTheme: (val: ThemeSwitcherCtx['theme']) => void;
  theme: 'light' | 'dark';
}
