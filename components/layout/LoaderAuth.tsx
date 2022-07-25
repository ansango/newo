import Navbar from "components/common/Navbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoaderAuth = () => {
  const { push, route } = useRouter();
  useEffect(() => {
    push("/signin");
    return () => {};
  }, [push]);
  return (
    <div className="h-screen flex flex-col justify-between">
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
        className="h-full"
      >
        <section className="bg-base-200 h-full py-20 md:py-0">
          <div className="max-w-md mx-auto w-full h-full flex flex-col justify-center"></div>
        </section>
      </motion.main>
    </div>
  );
};

export default LoaderAuth;
