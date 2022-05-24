import { HTMLMotionProps } from "framer-motion";
import React from "react";

export default interface CardStackProps extends HTMLMotionProps<"div"> {
  onVote?: (domNode: React.MutableRefObject<any> | null) => void;
  children?: React.ReactNode;
  restacked?: boolean;
  delayRestacking?: number;
}
