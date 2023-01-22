import { ImageProps } from "./Image/Image.types";
import { VideoProps } from "./Video/Video.types";
import { ComponentProps } from "react";
import { motion } from "framer-motion";

export interface MediaProps extends ComponentProps<typeof motion.div> {
  // Media Type
  type: string;

  // Image
  image?: ImageProps;

  // Video
  video?: VideoProps;

  // Custom classname
  className?: string;
}
