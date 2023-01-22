export interface ImageProps {
  /** The image src. */
  url?: string;
  /** The image alt. */
  alt?: string;

  /** Optional object position */
  objectPos?: string;
  /** Optional onload function */
  onLoad?: () => void;

  priority?: boolean;
}

export interface ImageLazyProps {
  // Image
  image: ImageProps;

  // Custom image classname
  imageClassName?: string;
}
