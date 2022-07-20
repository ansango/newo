import "styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { defaultTheme, themes } from "lib/data/config";
import React, { FC } from "react";

const Auth: FC<{ children: React.ReactNode }> = ({ children }) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });
  console.log(status);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        themes={themes}
        defaultTheme={defaultTheme}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default App;
