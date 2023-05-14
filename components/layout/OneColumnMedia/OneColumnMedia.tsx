import React from "react";
import styled from "styled-components";
import Media from "../../Media";

import OneColumnMediaProps, { WrapperProps } from "./OneColumnMedia.types";
import aspectRatio from "../../../utils/aspectRatio";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 3.2rem;

  @media screen and (min-width: 1024px) {
    padding: 0;
    margin-left: 45.6rem;
    width: 58%;
    height: 100%;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  aspect-ratio: ${(props) => props.ratio};
  width: 100%;
`;

const OneColumnMedia = ({ image }: OneColumnMediaProps) => {
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

export default OneColumnMedia;
