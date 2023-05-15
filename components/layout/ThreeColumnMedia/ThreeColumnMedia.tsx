import React from "react";
import styled from "styled-components";
import Media from "../../Media";

import ThreeColumnMediaProps, { WrapperProps } from "./ThreeColumnMedia.types";
import aspectRatio from "../../../utils/aspectRatio";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 8rem 3.2rem 0;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    padding: 10rem 0 0;
    flex-direction: row;
    gap: 2.4rem;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  aspect-ratio: ${(props) => props.ratio};
  width: 100%;
`;

const ThreeColumnMedia = ({ media }: ThreeColumnMediaProps) => {
  return (
    <Section>
      {media.map((item, index) => {
        const dimensions = item.media.hasOwnProperty("dimensions")
          ? item.media.dimensions
          : { width: 0, height: 0 };

        return (
          <Wrapper
            key={`column-media-${index}`}
            ratio={aspectRatio(dimensions.width ?? 0, dimensions.height ?? 0)}
          >
            <Media image={{ url: item.media.url, alt: item.media.alt }} />
          </Wrapper>
        );
      })}
    </Section>
  );
};

export default ThreeColumnMedia;
