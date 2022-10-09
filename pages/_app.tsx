import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "antd/dist/antd.css";
import rootStore from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from "@chakra-ui/react";

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
        <ChakraProvider>
            <Provider store={rootStore.store}>
                {/*<PersistGate persistor={rootStore.persistor} loading={null}>*/}
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
                {/*</PersistGate>*/}
            </Provider>
        </ChakraProvider>
    );
};

export default CookBook;
