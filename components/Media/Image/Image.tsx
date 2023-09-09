import * as React from "react";

import styled from "styled-components";

import { ImageLazyProps } from "./Image.types";
import Image from "next/legacy/image";

const StyledImage = styled(Image)`
  object-position: 20%;
  object-fit: cover;
`;

const CustomImage = ({ image }: ImageLazyProps) => {
  return (
    <StyledImage
      src={image.url}
      alt={image.alt}
      layout="fill"
      priority={image.priority}
    />
  );
};

export default CustomImage;
