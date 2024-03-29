import React from "react";

export default interface Props {
  /**
   * Determine typogrpahy variant
   */
  variant?: string;

  color?: string;

  /**
   * Push children
   */
  children?: React.ReactNode;

  /** Custom styling hook */
  className?: string;

  textShadow?: boolean;

  /**
   * Determine component type
   */
  component?: React.ElementType;
}
