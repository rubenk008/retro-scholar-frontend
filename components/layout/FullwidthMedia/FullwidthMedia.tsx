import React from "react";
import styled from "styled-components";
import Media from "../../Media";

import FullwidthMediaProps, { WrapperProps } from "./FullwidthMedia.types";
import aspectRatio from "../../../utils/aspectRatio";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8rem 0 0;

  @media screen and (min-width: 1024px) {
    padding: 10rem 0 0;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  aspect-ratio: ${(props) => props.ratio};
  width: 100%;
`;

const FullwidthMedia = ({ image }: FullwidthMediaProps) => {
  return (
    <Section>
      <Wrapper
        ratio={aspectRatio(image.dimensions.width, image.dimensions.height)}
      >
        <Media image={{ url: image.url, alt: image.alt }} />
      </Wrapper>
    </Section>
  );
};

export default FullwidthMedia;
