import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { useState } from 'react';

import initMockAPI from '@/mocks';

if (process.env.NODE_ENV === 'development') {
  initMockAPI();
}

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
