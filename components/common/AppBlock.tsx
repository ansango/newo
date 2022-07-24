import { FC, ReactNode } from "react";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import WrapperLayout from "components/layout/WrapperLayout";
import store from "lib/store";
import { ThemeProvider } from "next-themes";
import { defaultTheme, themes } from "lib/constants/config";

type Props = {
  session: any;
  children?: ReactNode;
};

const AppBlock: FC<Props> = ({ children, session }) => {
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
            <WrapperLayout>{children}</WrapperLayout>
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </>
  );
};

export default AppBlock;
