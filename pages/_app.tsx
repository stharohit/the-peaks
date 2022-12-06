import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CommonProviders from 'src/providers';
import DocumentHead from 'src/components/DocumentHead';
import FallbackPage from 'src/pages/Fallback';
import React from 'react';
import defaultAxiosConfig from 'src/helpers/axios/defaultAxiosConfig';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

defaultAxiosConfig();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={(e) => <FallbackPage {...e} />}>
      <DocumentHead />
      <QueryClientProvider client={queryClient}>
        <CommonProviders>
          <Component {...pageProps} />
        </CommonProviders>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
