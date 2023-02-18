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

import { useWindowSize } from "../../hooks/useWindowSize";
import isMobile from "../../utils/isMobile";

const SliderWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: auto;
  background: #fff;

  @media screen and (min-width: 1024px) {
    width: 120rem;
    height: 67.2rem;
  }
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;

  &.isActive {
    opacity: 1;
  }
`;

const SlideImage = styled(motion.div)`
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
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.6) 100%
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
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

const SlideText = styled(motion.div)`
  position: absolute;
  z-index: 1;
  bottom: calc(68 / 414 * 100vw);
  left: 0;
  right: 0;
  padding: 0 calc(32 / 414 * 100vw);
  text-align: left;

  > h1 {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    width: 36rem;
    max-width: 36rem;
    left: auto;
    right: 6rem;
    top: 17.2rem;
    bottom: auto;

    > h1 {
      margin-bottom: 1.2rem;
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
  pointer-events: none;

  @media screen and (min-width: 1024px) {
    width: 30rem;
    max-width: 30rem;
    padding: 0;
    left: 4rem;
    top: 4rem;
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
  /* justify-content: space-between; */
  position: absolute;
  z-index: 99999;
  width: 60rem;
  max-width: 60rem;
  bottom: 4rem;
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
    top: 3.2rem;
    right: 3.2rem;
  }
`;

const StorySlide = ({ storyId = "", slice, handleClosePage = (e) => {} }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playedSlides, setPlayedSlides] = useState([]);
  const [pausingSlide, setPauseSlide] = useState(false);
  const [direction, setDirection] = useState("");
  const [navigationClicked, setNavigationClicked] = useState(false);

  const timerRef = useRef(null);
  const isLongPress = useRef(null);
  const router = useRouter();

  const [isMobileView, setIsMobileView] = useState(false);

  const [slidesDurationArray, setSlidesDurationArray] = useState([]);

  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

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

  useEffect(() => {
    setActiveSlide(0);
  }, []);

  useEffect(() => {
    if (slice.items.length > 0) {
      let durationArray = [];

      let slidesPlayedStateArray = [];

      slice.items.map((sliceItem, index) => {
        const duration =
          sliceItem.slideDuration !== null ? sliceItem.slideDuration : 5;
        durationArray.push(duration);
        slidesPlayedStateArray.push({ slideIndex: index, hasPlayed: false });
      });

      setSlidesDurationArray(durationArray);

      setPlayedSlides(slidesPlayedStateArray);
    }
  }, [slice]);

  return (
    <SliderWrapper layout layoutId={`card-container-${storyId}`}>
      {slice.items.map((sliceItem, index) => {
        const thumbnailMobile = sliceItem.media.hasOwnProperty("mobile")
          ? sliceItem.media.mobile
          : sliceItem.media;

        const thumbnailDesktop = sliceItem.media;

        const isVisible =
          index === activeSlide || index === activeSlide + 1 || index === 0;

        return (
          <Slide
            key={`key-${index + 1}`}
            className={index === activeSlide ? "isActive" : ""}
            onMouseDown={pauseSlide}
            onMouseUp={playSlide}
          >
            {isVisible && (
              <SlideImage>
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: 1.08,
                    top: 20,
                    left: 20,
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                  }}
                >
                  <Media
                    type="image"
                    image={
                      isMobileView
                        ? {
                            url: thumbnailMobile.url,
                            alt: thumbnailMobile.alt,
                          }
                        : {
                            url: thumbnailDesktop.url,
                            alt: thumbnailDesktop.alt,
                          }
                    }
                    layout
                    layoutId={index === 0 ? `card-media-${storyId}` : ""}
                    withHalftone
                  />
                </motion.div>

                <SlideImageOverlay />
              </SlideImage>
            )}
            <SlideText
              initial={{ translateY: "20px", opacity: 0 }}
              animate={{
                translateY: index === activeSlide ? "0px" : "20px",
                opacity: index === activeSlide ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: index === activeSlide ? 0 : 0,
              }}
            >
              {sliceItem.heading ? (
                <Typography
                  color="white"
                  variant="h4Alt"
                  component={index === 0 ? "h1" : "h2"}
                  textShadow
                >
                  {sliceItem.heading}
                </Typography>
              ) : null}
              <Typography
                color="white"
                variant="body3"
                component={"p"}
                textShadow
              >
                {sliceItem.caption
                  ? sliceItem.caption
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur velit dignissim enim elementum sollicitudin."}
              </Typography>
            </SlideText>
          </Slide>
        );
      })}
      {slidesDurationArray.length > 0 && (
        <DurationWrapper>
          {slice.items.map((sliceItem, index) => (
            <DurationIndicator
              key={`key-${index + 1}`}
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
      )}
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
        {activeSlide !== 0 && (
          <IconButton
            onClick={prevSlide}
            icon={
              <Arrow
                height="4rem"
                width="4rem"
                style={{ transform: "scaleX(-1)" }}
              />
            }
            style={{ margin: "0 auto 0 0" }}
          />
        )}
        {activeSlide < slice.items.length - 1 && (
          <IconButton
            onClick={nextSlide}
            icon={<Arrow height="4rem" width="4rem" />}
            style={{ margin: "0 0 0 auto" }}
          />
        )}
      </DesktopSlideNavigationWrapper>
      <CloseButton>
        <IconButton
          icon={<Cross color="#283086" height="4rem" width="4rem" />}
          onClick={(e) => handleClosePage(e)}
        />
      </CloseButton>
    </SliderWrapper>
  );
};

export default StorySlide;
