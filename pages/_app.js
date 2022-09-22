import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import EditPage from '../components/layout/EditPage';
import 'antd/dist/antd.css';

// import '../styles/globals.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          toastOptions: {
            style: {
              fontSize: '1.4rem',
            },
          },
        }}
      />
      <EditPage>
        <Component {...pageProps} />
      </EditPage>

    </QueryClientProvider>
  );
}

export default MyApp;
