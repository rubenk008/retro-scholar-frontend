import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children }) => {
  const { pathname, query } = useRouter();

  const variants = {
    init: {
      opacity: 0,
      y: 60,
    },

    out: {
      opacity: 0,
      // y: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence
      initial={false}
      mode="popLayout"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={pathname + query?.slug}
        variants={variants}
        animate="in"
        initial="init"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
