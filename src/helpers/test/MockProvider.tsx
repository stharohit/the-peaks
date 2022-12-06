import React, { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CommonProviders from 'src/providers';

const queryClient = new QueryClient();

type MockProviderProps = {
  children: JSX.Element | ReactNode;
};

const MockProvider = ({ children }: MockProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CommonProviders>{children}</CommonProviders>
    </QueryClientProvider>
  );
};

export default MockProvider;
