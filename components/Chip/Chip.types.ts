import React from "react";

export default interface Props {
  /**
   * Determine typogrpahy variant
   */
  variant?: string;

  color?: string;

  size?: string;

  Icon?: React.ReactNode;

  /**
   * Push children
   */
  children?: React.ReactNode;

  /** Custom styling hook */
  className?: string;
}
