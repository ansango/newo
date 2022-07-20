import "styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { defaultTheme, themes } from "lib/data/config";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      themes={themes}
      defaultTheme={defaultTheme}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
