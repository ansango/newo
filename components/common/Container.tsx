import { defaultTheme } from "lib/constants/config";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Navbar/Navbar";
import Structure from "./Structure";
type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [theme]);
  return (
    <Structure>
      <div className="flex flex-col justify-center px-2 sm:px-3 md:px-5">
        <Nav />
        <main className="pb-10 pt-5">{children}</main>
        <Footer />
      </div>
    </Structure>
  );
};

export default Container;
