import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "antd/dist/antd.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 60 * 60 * 1000,
            staleTime: 60 * 60 * 1000
        }
    }
});

const CookBook = ({ Component, pageProps }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster
                position="bottom-right"
                toastOptions={
                    {
                        style: {
                            fontSize: "1.4rem"
                        }
                    }
                }
            />
            <Component {...pageProps} />
        </QueryClientProvider>
    );
};

export default CookBook;
