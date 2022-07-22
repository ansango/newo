import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";
import Structure from "components/common/Structure";

type Props = {
  children?: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();
  return (
    <>
      <Navbar />
      <Structure>
        <motion.main
          key={route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="pb-10 pt-5"
        >
          {children}
        </motion.main>
      </Structure>
      <Footer />
    </>
  );
};

export default MainLayout;
