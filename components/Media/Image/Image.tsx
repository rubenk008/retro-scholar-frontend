import styled from "styled-components";

import { ImageLazyProps } from "./Image.types";
import Image from "next/image";

const StyledImage = styled(Image)`
  object-position: 20%;
  object-fit: cover;
`;

const CustomImage = ({ image: { url, alt, ...rest } }: ImageLazyProps) => {
  return <StyledImage src={url} alt={alt} fill {...rest} />;
};

export default CustomImage;
