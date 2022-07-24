import "styles/globals.css";
import type { AppProps } from "next/app";
import AppBlock from "components/common/AppBlock";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <AppBlock session={session}>
      <Component {...pageProps} />
    </AppBlock>
  );
};

export default App;
