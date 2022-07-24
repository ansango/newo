import { defaultTheme } from "lib/constants/config";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

type Props = {
  children?: ReactNode;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [theme]);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default WrapperLayout;
