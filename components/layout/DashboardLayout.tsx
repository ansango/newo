import Navbar from "components/dashboard/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import DrawerContainer from "components/dashboard/Drawer/DrawerContainer";
import Auth from "components/guards/Auth";

type Props = {
  children?: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();

  return (
    <Auth>
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
    </Auth>
  );
};

export default DashboardLayout;
