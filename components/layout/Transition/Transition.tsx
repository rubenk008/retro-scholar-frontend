import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  const variants = {
    init: {
      opacity: 0,
      y: 60,
    },

    out: {
      opacity: 0,
      transition: {
        duration: 0.15,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={asPath}
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
