import { useGetSessionQuery } from "@/store/api/auth";
import { setSession } from "@/store/features/auth";
import { useAppDispatch } from "@/store/hooks";
import { defaultTheme } from "lib/constants/config";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";

type Props = {
  children?: ReactNode;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const { data } = useGetSessionQuery();
  const dispatch = useAppDispatch();
  const { theme } = useTheme();
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [theme]);

  useEffect(() => {
    if (data) {
      dispatch(setSession(data));
    }
  }, [data, dispatch]);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default WrapperLayout;
