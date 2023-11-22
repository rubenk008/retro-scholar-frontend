export interface CustomImageProps {
  /** The image src. */
  url?: string;
  /** The image alt. */
  alt?: string;

  /** Optional object position */
  objectPos?: string;
  /** Optional onload function */
  onLoad?: () => void;

  priority?: boolean;

  loading?: "lazy" | "eager" | undefined;
}

export interface ImageLazyProps {
  // Image
  image: CustomImageProps;

  // Custom image classname
  imageClassName?: string;
}
