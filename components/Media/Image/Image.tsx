import { useState, useEffect } from "react";

import styled from "styled-components";

import { ImageLazyProps } from "./Image.types";
import Image from "next/image";

const StyledImage = styled(Image)`
  object-position: 20%;
  object-fit: cover;
`;

const isMobileConnection = () => {
  const connection =
    (navigator as any).connection ||
    (navigator as any).mozConnection ||
    (navigator as any).webkitConnection;
  return (
    connection?.type === "cellular" ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g" ||
    connection?.effectiveType === "3g" ||
    connection?.saveData === true
  );
};

const defer = (callback) => {
  // Check if we can use requestIdleCallback
  if (window.requestIdleCallback) {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  // Just defer using setTimeout with some random delay otherwise
  const handle = setTimeout(callback, 2345 + Math.random() * 1000);
  return () => clearTimeout(handle);
};

const CustomImage = ({ image }: ImageLazyProps) => {
  const [loading, setLoading] = useState(image.loading);

  useEffect(() => {
    // Skip if image is already eager or has priority (disables lazy loading)
    if (image.loading === "eager" || image.priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer;
      // Set loading to eager if all resources of document are loaded, but defer it a bit
      const onLoad = () => {
        clearDefer = defer(() => setLoading("eager"));
      };
      window.addEventListener("load", onLoad);
      return () => {
        // Clean up the load event listener and an eventual defer
        window.removeEventListener("load", onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [image.loading, image.priority]);

  return (
    <StyledImage
      loading={loading}
      src={image.url}
      alt={image.alt}
      layout="fill"
      {...image}
    />
  );
};

export default CustomImage;
