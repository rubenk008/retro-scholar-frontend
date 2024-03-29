import React, {
  Children,
  ReactNode,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useCallback,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import {
  SliderMethods,
  SliderProps,
  EmblaProps,
  EmblaViewportProps,
} from "./Slider.types";

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

// eslint-disable-next-line react/display-name
const Slider = forwardRef<SliderMethods, SliderProps>(
  (
    {
      children,
      options = {
        align: "start",
        containScroll: "trimSnaps",
        skipSnaps: true,
      },
      slideSpacing = 1,
      padding = "",
      setCurrentSlide,
    },
    ref
  ) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const onSelect = useCallback(
      (emblaApi) => {
        if (setCurrentSlide) setCurrentSlide(emblaApi.selectedScrollSnap());
      },
      [setCurrentSlide]
    );

    useEffect(() => {
      if (emblaApi) emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    useImperativeHandle(ref, () => ({
      nextSlide() {
        emblaApi.scrollNext();
      },
      prevSlide() {
        emblaApi.scrollPrev();
      },
      scrollToSlide(index) {
        emblaApi.scrollTo(index);
      },
    }));

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
  }
);

export default Slider;
