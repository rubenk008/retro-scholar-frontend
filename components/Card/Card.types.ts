import React from "react";

export default interface Props {
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

  withMargin?: boolean;
}
