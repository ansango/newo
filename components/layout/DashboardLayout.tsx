import Navbar from "components/common/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import DrawerContainer from "components/dashboard/Drawer/DrawerContainer";
import { authSelector } from "@/store/features/auth";
import { useSelector } from "react-redux";
import LoaderAuth from "./LoaderAuth";

type Props = {
  children?: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();
  const { isAuthenticated } = useSelector(authSelector);

  if (!isAuthenticated) {
    return <LoaderAuth />;
  }

  return (
    <DrawerContainer>
      <Navbar />
      <motion.main
        key={route}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
        transition={{ delay: 0.5 }}
        className="w-full h-full relative"
      >
        <div className="absolute w-full h-full">{children}</div>
      </motion.main>
    </DrawerContainer>
  );
};

export default DashboardLayout;
