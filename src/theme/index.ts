import fontWeight from './fontWeight';

const light = {
  colors: {
    primaryColor: '#09357B',
    primaryLight: '#2153A3',
    cardBg: '#0D47A1',
    cardOverlayBg: '#09357BE5',
    cardBorder: {
      default: '#388E3C',
      sport: '#D32F2F',
      culture: '#FFC107',
      lifeandstyle: '#2196F3',
    },
    text: '#000000DE',
    link: '#09357B',
    borderGrey: '#0000006B',
    white: '#FFFFFF',
    mainBg: '#fff',
    danger: '#D32F2F',
    success: '#388E3C',
    shadowColor: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    themeSwitcherBg: '#fff',
    moon: '#e3e3e3',
    sun: '#e5b913',
  },
  fontWeight,
};

const dark = {
  colors: {
    primaryColor: '#2e2e2e',
    primaryLight: '#000',
    cardBg: '#000',
    cardOverlayBg: '#222222e5',
    cardBorder: {
      default: '#388E3C',
      sport: '#D32F2F',
      culture: '#FFC107',
      lifeandstyle: '#2196F3',
    },
    text: '#f2f2f2',
    link: '#1f5ab9',
    borderGrey: '#f2f2f2',
    white: '#FFFFFF',
    mainBg: '#141414',
    danger: '#D32F2F',
    success: '#388E3C',
    shadowColor: (opacity: number) => `rgba(135, 135, 135, ${opacity})`,
    themeSwitcherBg: '#fff',
    moon: '#1ce9b1',
    sun: '#a1a1a1',
  } as typeof light['colors'],
  fontWeight,
};

export const theme = {
  dark,
  light,
};
