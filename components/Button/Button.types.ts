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
  /**
   * Button contents
   */
  label?: string;

  /** Custom styling hook */
  className?: string;

  children?: React.ReactNode;

  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string;

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  to?: string;

  component?: React.ElementType;
}
