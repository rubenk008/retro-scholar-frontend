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
  padding: 8rem 3.2rem 0;

  @media screen and (min-width: 1024px) {
    padding: 10rem 0 0;
    margin-left: 45.6rem;
    width: 58%;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  aspect-ratio: ${(props) => props.ratio};
  width: 100%;
`;

const OneColumnMedia = ({ image }: OneColumnMediaProps) => {
  const dimensions = image.hasOwnProperty("dimensions")
    ? image.dimensions
    : { width: 0, height: 0 };

  return (
    <Section>
      <Wrapper ratio={aspectRatio(dimensions.width, dimensions.height)}>
        <Media
          image={{
            url: image.url ? image.url : "",
            alt: image.alt ? image.alt : "",
          }}
        />
      </Wrapper>
    </Section>
  );
};

export default OneColumnMedia;
