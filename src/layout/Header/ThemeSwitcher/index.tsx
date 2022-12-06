import { StyledThemeSwitcher } from './themeSwitcher';
import { useThemeSwitcherContext } from 'src/context/ThemeSwitcher/ThemeSwitcher.context';
import IconMoon from 'src/components/Icons/IconMoon';
import IconSun from 'src/components/Icons/IconSun';
import React from 'react';
import Switch from 'src/components/Switch';

const ThemeSwitcher = () => {
  const { switchTheme, theme } = useThemeSwitcherContext();
  const isChecked = theme === 'dark' ? true : false;

  const handleSwitch = (val: boolean) =>
    val ? switchTheme('dark') : switchTheme('light');

  return (
    <StyledThemeSwitcher>
      <IconSun /> <Switch onSwitch={handleSwitch} isChecked={isChecked} />{' '}
      <IconMoon />
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;
