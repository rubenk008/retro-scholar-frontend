import React from "react";

export default interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: string;
  /**
  /**
   * How large should the button be?
   */
  size?: "small" | "large";

  icon?: React.ReactNode;

  /** Custom styling hook */
  className?: string;

  component?: React.ElementType;
}
