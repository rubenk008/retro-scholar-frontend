import { ComponentProps } from "react";
import { motion } from "framer-motion";

export default interface Props extends ComponentProps<typeof motion.div> {
  /** Custom styling hook */
  className?: string;
}
