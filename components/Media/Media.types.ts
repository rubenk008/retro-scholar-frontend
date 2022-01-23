import { ImageProps } from "./Image/Image.types";
import { VideoProps } from "./Video/Video.types";

export interface MediaProps {
  // Media Type
  type: string;

  // Image
  image?: ImageProps | string;

  // Video
  video?: VideoProps | string;

  // Custom classname
  className?: string;
}
