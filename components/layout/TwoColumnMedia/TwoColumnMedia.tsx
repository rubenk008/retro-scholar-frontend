import React from "react";
import styled from "styled-components";
import Media from "../../Media";

import TwoColumnMediaProps, { WrapperProps } from "./TwoColumnMedia.types";
import aspectRatio from "../../../utils/aspectRatio";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 3.2rem;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    height: 100%;
    padding: 0 14.4rem;
    flex-direction: row;
    gap: 2.4rem;
  }
`;

const Wrapper = styled.div<WrapperProps>`
  aspect-ratio: ${(props) => props.ratio};
  width: 100%;
`;

const TwoColumnMedia = ({ media }: TwoColumnMediaProps) => {
  return (
    <Section>
      {media.map((item, index) => {
        return (
          <Wrapper
            key={`column-media-${index}`}
            ratio={aspectRatio(
              item.image.dimensions.width,
              item.image.dimensions.height
            )}
          >
            <Media image={{ url: item.image.url, alt: item.image.alt }} />
          </Wrapper>
        );
      })}
    </Section>
  );
};

export default TwoColumnMedia;
