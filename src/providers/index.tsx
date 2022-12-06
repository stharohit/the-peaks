import React, { ReactNode } from 'react';

import ActionProvider from './ActionProvider';
import AllThemeProvider from './AllThemeProvider';

interface CommonProvidersProps {
  children: ReactNode;
}

const CommonProviders = ({ children }: CommonProvidersProps) => {
  return (
    <AllThemeProvider>
      <ActionProvider>{children}</ActionProvider>
    </AllThemeProvider>
  );
};

export default CommonProviders;
