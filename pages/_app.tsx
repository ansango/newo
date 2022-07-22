import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SessionProvider, useSession } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { defaultTheme, themes } from "lib/data/config";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import WrapperLayout from "components/layout/WrapperLayout";
import store from "lib/store";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>
      </Head>
      <Provider store={store}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            themes={themes}
            defaultTheme={defaultTheme}
          >
            <WrapperLayout>
              <Component {...pageProps} />
              <Toaster />
            </WrapperLayout>
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </>
  );
};

export default App;
