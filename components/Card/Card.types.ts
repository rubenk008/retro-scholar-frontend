import React, { ComponentProps } from "react";
import { motion } from "framer-motion";

export default interface Props extends ComponentProps<typeof motion.div> {
  /**
   * Determine card variant
   */
  variant?: string;
  /**
   * Determine size
   */
  size?: string;
  /**
   * Push children
   */
  children?: React.ReactNode;

  /** Custom styling hook */
  className?: string;

  // Has drop-shadow
  hasDropShadow?: boolean;

  // Has random rotation
  hasRandomRotation?: boolean;

  withMargin?: boolean;

  cardArticleId?: number | string;
}
