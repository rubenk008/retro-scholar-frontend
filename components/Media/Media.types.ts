import { ImageProps } from "./Image/Image.types";
import { VideoProps } from "./Video/Video.types";
import React, { ComponentProps } from "react";
import { motion } from "framer-motion";

export interface MediaProps extends ComponentProps<typeof motion.div> {
  // Media Type
  type: string;

  // Image
  image?: ImageProps | string;

  // Video
  video?: VideoProps | string;

  // Custom classname
  className?: string;
}
