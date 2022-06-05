import { HTMLMotionProps } from "framer-motion";
import React from "react";

export default interface CardStackProps extends HTMLMotionProps<"div"> {
  onVote?: (arg: number) => void;
  children?: React.ReactNode;
  restacked?: boolean;
  delayRestacking?: number;
  triggerAutoAnimation?: boolean;
}
