import { useState, useEffect } from "react";

import styled from "styled-components";

import { ImageLazyProps } from "./Image.types";
import Image from "next/image";

const StyledImage = styled(Image)`
  object-position: 20%;
  object-fit: cover;
`;

const CustomImage = ({ image }: ImageLazyProps) => {
  return <StyledImage src={image.url} alt={image.alt} fill {...image} />;
};

export default CustomImage;
