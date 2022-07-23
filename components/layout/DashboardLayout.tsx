import Navbar from "components/dashboard/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import DrawerContainer from "components/dashboard/Drawer/DrawerContainer";
import { useSession } from "next-auth/react";
import MainLayout from "./MainLayout";

type Props = {
  children?: ReactNode;
};

function Auth({ children }: any) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { push } = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      push("/signin");
    },
  });

  if (status === "loading") {
    return (
      <MainLayout>
        <div>Loading...</div>
      </MainLayout>
    );
  }
  return children;
}

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
