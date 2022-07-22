import { selectUser } from "@/store/features/user";
import { getUser } from "@/store/features/user/thunks";
import { Icon } from "components/common/Icons";
import { defaultTheme } from "lib/data/config";

import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children?: ReactNode;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { theme } = useTheme();
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, [theme]);
  useEffect(() => {
    if (!user) dispatch(getUser());
  }, [dispatch, user]);
  return <>{children}</>;
};

export default WrapperLayout;
