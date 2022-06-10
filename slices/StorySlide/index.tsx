import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Media from "../../components/Media";
import Typography from "../../components/Typography";
import DurationIndicator from "../../components/DurationIndicator";

const SliderWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  margin: auto;
  background: #fff;

  @media screen and (min-width: 1024px) {
    width: calc(1200 / 1440 * 100vw);
    height: calc(672 / 1440 * 100vw);
  }
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 500ms;

  &.isActive {
    transition-delay: 100ms;
    opacity: 1;
  }
`;

const SlideImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SlideImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: calc(414 / 414 * 100vw);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );

  @media screen and (min-width: 1024px) {
    width: calc(543 / 1440 * 100vw);
    height: 100%;
    left: auto;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`;

const SlideText = styled.div`
  position: absolute;
  z-index: 1;
  bottom: calc(68 / 414 * 100vw);
  left: 0;
  right: 0;
  padding: 0 calc(32 / 414 * 100vw);
  text-align: left;

  > h2 {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    width: calc(360 / 1440 * 100vw);
    max-width: 360px;
    left: auto;
    right: calc(60 / 1440 * 100vw);
    top: calc(172 / 1440 * 100vw);

    > h2 {
      margin-bottom: 12px;
    }
  }
`;

const DurationWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: calc(32 / 414 * 100vw);
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 8px;
  z-index: 4;
  padding: 0 calc(32 / 414 * 100vw);

  @media screen and (min-width: 1024px) {
    width: calc(300 / 1440 * 100vw);
    max-width: 300px;
    padding: 0;
    left: calc(40 / 1440 * 100vw);
    top: calc(40 / 1440 * 100vw);
  }
`;

const StorySlide = ({ storyId = 0, slice }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playedSlides, setPlayedSlides] = useState([]);
  const [pausingSlide, setPauseSlide] = useState(false);

  let slidesDurationArray = [];

  const updateActiveSlideOnEndTimer = () => {
    if (activeSlide < slice.items.length - 1) {
      const updatedPlayedSlidesArray = playedSlides.map((slide) =>
        slide.slideIndex === activeSlide ? { ...slide, hasPlayed: true } : slide
      );
      setPlayedSlides(updatedPlayedSlidesArray);

      setActiveSlide(activeSlide + 1);
    }

    if (activeSlide === slice.items.length - 1) {
      const updatedPlayedSlidesArray = playedSlides.map((slide) =>
        slide.slideIndex === activeSlide ? { ...slide, hasPlayed: true } : slide
      );
      setPlayedSlides(updatedPlayedSlidesArray);
    }
  };

  const pauseSlide = () => {
    setPauseSlide(true);
  };

  const playSlide = () => {
    setPauseSlide(false);
  };

  useEffect(() => {
    setActiveSlide(0);
  }, []);

  useEffect(() => {
    if (slice.items.length > 0) {
      slidesDurationArray = [];

      let slidesPlayedStateArray = [];

      slice.items.map((sliceItem, index) => {
        slidesDurationArray.push(5);
        slidesPlayedStateArray.push({ slideIndex: index, hasPlayed: false });
      });

      setPlayedSlides(slidesPlayedStateArray);
    }
  }, [slice]);

  return (
    <SliderWrapper layoutId={`card-container-${storyId}`}>
      {slice.items.map((sliceItem, index) => (
        <Slide
          key={`key-${index + 1}`}
          className={index === activeSlide ? "isActive" : ""}
          onMouseDown={pauseSlide}
          onMouseUp={playSlide}
        >
          <SlideImage>
            <Media
              type="image"
              image={{
                url: sliceItem.media.url,
                alt: sliceItem.media.alt,
              }}
              layoutId={index === 0 ? `card-media-${storyId}` : ""}
            />
            <SlideImageOverlay />
          </SlideImage>
          <SlideText>
            <Typography color="white" variant="h4Alt" component={"h2"}>
              {sliceItem.heading ? sliceItem.heading : "Lorem ipsum"}
            </Typography>
            <Typography color="white" variant=" body2" component={"p"}>
              {sliceItem.description
                ? sliceItem.discription
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur velit dignissim enim elementum sollicitudin."}
            </Typography>
          </SlideText>
        </Slide>
      ))}

      <DurationWrapper>
        {slice.items.map((sliceItem, index) => (
          <DurationIndicator
            key={`key-${index + 1}`}
            playAnimation={index === activeSlide ? true : false}
            pauseAnimation={
              index === activeSlide && pausingSlide ? true : false
            }
            restartAnimation={false}
            durationOfSlide={slidesDurationArray[index]}
            endOfAnimation={updateActiveSlideOnEndTimer}
          />
        ))}
      </DurationWrapper>
    </SliderWrapper>
  );
};

export default StorySlide;
