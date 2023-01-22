import * as React from "react";

import styled, { keyframes } from "styled-components";

import { ImageLazyProps } from "./Image.types";
import Image from "next/image";

const loadingAnimation = keyframes`
  0%{
    transform: translate3d(-100%, 0, 0);
  }
 100%{
    transform: translate3d(100%, 0, 0);
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  &:before {
    content: " ";
    height: 100%;
    display: block;
    background-color: #ededed;
  }

  &:after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.45) 40%,
      rgba(255, 255, 255, 0) 81%
    );
    animation: ${loadingAnimation} 1.2s linear infinite;
  }
`;

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
