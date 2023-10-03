import React, { Children, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { SliderProps } from "./Slider.types";

type EmblaProps = {
  slideSpacing: number;
};

type EmblaViewportProps = {
  padding: string;
};

const Embla = styled.div<EmblaProps>`
  --slide-spacing: ${(props) => `${props.slideSpacing}rem`};
`;

const EmblaViewport = styled.div<EmblaViewportProps>`
  padding: ${(props) => props.padding};
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const EmblaSlide = styled.div`
  flex: 0 0 auto;
  min-width: 0;
  max-width: 100%;
  padding-left: var(--slide-spacing);
  position: relative;
`;

const Slider = ({
  children,
  options = {
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: true,
  },
  slideSpacing = 1,
  padding = "",
}: SliderProps) => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <Embla slideSpacing={slideSpacing}>
      <EmblaViewport ref={emblaRef} padding={padding}>
        <EmblaContainer>
          {Children.map(children, (child: ReactNode) => {
            return <EmblaSlide>{child}</EmblaSlide>;
          })}
        </EmblaContainer>
      </EmblaViewport>
    </Embla>
  );
};

export default Slider;
