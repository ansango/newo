import { defaultTheme } from "lib/data/config";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect } from "react";

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

  return <>{children}</>;
};

export default WrapperLayout;
