import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion } from "framer-motion";

import Media from "../../components/Media";
import Typography from "../../components/Typography";
import DurationIndicator from "../../components/DurationIndicator";
import IconButton from "../../components/IconButton";
import Arrow from "../../components/icons/Arrow";
import Cross from "../../components/icons/Cross";
import prevDomainSelf from "../../utils/prevDomainSelf";

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

const SlideNavigation = styled.div`
  background: rgba(255, 255, 255, 0);
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 9999;

  @media screen and (min-width: 1024px) {
    display: none;
  }

  &.next {
    right: 0;
    left: auto;
  }

  &.prev {
    right: auto;
    left: 0;
  }
`;

const DesktopSlideNavigationWrapper = styled.div`
  display: none;
  justify-content: space-between;
  position: absolute;
  z-index: 99999;
  width: calc(600 / 1440 * 100vw);
  max-width: 600px;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  z-index: 99999;
  top: calc(32 / 414 * 100vw);
  right: calc(32 / 414 * 100vw);

  @media screen and (min-width: 1024px) {
    top: calc(32 / 1440 * 100vw);
    right: calc(32 / 1440 * 100vw);
  }
`;

const StorySlide = ({ storyId = 0, slice }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playedSlides, setPlayedSlides] = useState([]);
  const [pausingSlide, setPauseSlide] = useState(false);
  const [direction, setDirection] = useState("");
  const [navigationClicked, setNavigationClicked] = useState(false);

  const timerRef = useRef(null);
  const isLongPress = useRef(null);
  const router = useRouter();

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

  const startPressTimer = () => {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      onLongTouch();
      isLongPress.current = true;
    }, 300);
  };

  const pauseSlide = () => {
    setPauseSlide(true);
  };

  const playSlide = () => {
    setPauseSlide(false);
  };

  const nextSlide = () => {
    if (activeSlide < slice.items.length - 1) {
      setActiveSlide(activeSlide + 1);
    }

    setNavigationClicked(false);
    setDirection("");
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(0);
    }
    setNavigationClicked(false);
    setDirection("");
  };

  const onLongTouch = () => {
    pauseSlide();
  };

  const onTouchStart = (dir) => {
    setDirection(dir);
    startPressTimer();
  };

  const onTouchEnd = () => {
    if (isLongPress.current) {
      playSlide();
    }

    if (direction === "left" && !isLongPress.current) {
      setNavigationClicked(true);
      prevSlide();
    }

    if (direction === "right" && !isLongPress.current) {
      setNavigationClicked(true);
      nextSlide();
    }

    clearTimeout(timerRef.current);
    return;
  };

  const handleClosePage = (e) => {
    e.preventDefault();
    const prevIsDomainSelf = prevDomainSelf(router.basePath);

    if (prevIsDomainSelf) {
      router.back;
    }

    if (!prevIsDomainSelf) {
      router.push("/category");
    }
  };

  useEffect(() => {
    setActiveSlide(0);
  }, []);

  useEffect(() => {
    if (slice.items.length > 0) {
      slidesDurationArray = [];

      let slidesPlayedStateArray = [];

      slice.items.map((sliceItem, index) => {
        slidesDurationArray.push(sliceItem.slideDuration);
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
            slideNumber={index}
            playAnimation={index === activeSlide ? true : false}
            stoppingAnimation={index !== activeSlide ? true : false}
            pauseAnimation={
              index === activeSlide && pausingSlide ? true : false
            }
            resetAnimation={
              navigationClicked && index > activeSlide ? true : false
            }
            durationOfSlide={slidesDurationArray[index]}
            endOfAnimation={updateActiveSlideOnEndTimer}
            setComplete={index < activeSlide}
          />
        ))}
      </DurationWrapper>
      <SlideNavigation
        className="prev"
        onTouchStart={() => onTouchStart("left")}
        onTouchEnd={onTouchEnd}
      />
      <SlideNavigation
        className="next"
        onTouchStart={() => onTouchStart("right")}
        onTouchEnd={onTouchEnd}
      />
      <DesktopSlideNavigationWrapper>
        <IconButton
          onClick={prevSlide}
          icon={
            <Arrow height={40} width={40} style={{ transform: "scaleX(-1)" }} />
          }
        />
        <IconButton
          onClick={nextSlide}
          icon={<Arrow height={40} width={40} />}
        />
      </DesktopSlideNavigationWrapper>
      <CloseButton>
        <IconButton
          icon={<Cross color="#283086" />}
          onClick={(e) => handleClosePage(e)}
        />
      </CloseButton>
    </SliderWrapper>
  );
};

export default StorySlide;
