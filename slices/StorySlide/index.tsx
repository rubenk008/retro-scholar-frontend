import React, { useEffect, useState, useRef } from "react";

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
import TextBalloon from "../../components/TextBalloon";
import Slider from "../../components/Slider";
import { EmblaOptionsType } from "embla-carousel-react";

const SliderWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #fff;

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 96vh;
    margin: 0 auto;
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100vw;
  max-height: 100vh;
  height: var(--app-height);
  overflow: hidden;
`;

const SlideImage = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SlideText = styled(motion.div)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 0 3.2rem;
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1023px) {
    &.content_top {
      justify-content: center;
      align-items: flex-start;
      top: 10rem;
    }

    &.content_bottom {
      justify-content: center;
      align-items: flex-end;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 14rem 4.4rem 11.2rem;

    &.content_left_top {
      justify-content: flex-start;
      align-items: flex-start;
    }

    &.content_left_bottom {
      justify-content: flex-start;
      align-items: flex-end;
    }

    &.content_right_top {
      justify-content: flex-end;
      align-items: flex-start;
    }

    &.content_right_bottom {
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
`;

const SlideImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: calc(414 / 414 * 100vw);
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background: linear-gradient(
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0) 60%
  );

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const DurationWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 5.2rem;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 0.65rem;
  z-index: 4;
  padding: 0 3.2rem;
  pointer-events: none;
  width: 34.2rem;
  max-width: 34.2rem;

  @media screen and (min-width: 1024px) {
    width: 30rem;
    max-width: 30rem;
    padding: 0;
    left: 4.4rem;
    top: 6rem;
  }
`;

const DesktopSlideNavigationWrapper = styled.div`
  display: none;
  position: absolute;
  z-index: 99999;
  width: 64rem;
  max-width: 64rem;
  bottom: 4.4rem;
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
    top: 4.4rem;
    right: 4.4rem;
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 0.5rem;
`;

const CaptionPostionDesktop = {
  "Left Bottom": "left_bottom",
  "Left Top": "left_top",
  "Right Bottom": "right_bottom",
  "Right Top": "right_top",
};

const CaptionPostionMobile = {
  Bottom: "bottom",
  Top: "top",
};

const CaptionColor = {
  Blue: "blue",
  Pink: "pink",
};

const ArrowPosition = {
  Bottom: "top",
  Top: "bottom",
  "Left Bottom": "top_right",
  "Left Top": "bottom_right",
  "Right Bottom": "top_left",
  "Right Top": "bottom_left",
};

const StorySlide = ({ slice, handleClosePage = (e) => {} }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [isMobileView, setIsMobileView] = useState(false);

  const [slidesDurationArray, setSlidesDurationArray] = useState([]);

  const size = useWindowSize();

  const [isActive, setIsActive] = useState(false);

  const sliderRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 500);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (e) => {
    if (e.code === "ArrowLeft") {
      prevSlide();
    }

    if (e.code === "ArrowRight") {
      nextSlide();
    }

    if (e.code === "Escape") {
      handleClosePage(e);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

  const nextSlide = () => {
    sliderRef.current.nextSlide();
  };

  const prevSlide = () => {
    sliderRef.current.prevSlide();
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
    }
  }, [slice]);

  const sliderOptions: EmblaOptionsType = {
    active: isActive,
  };

  return (
    <SliderWrapper>
      <Slider
        options={sliderOptions}
        slideSpacing={0}
        setCurrentSlide={setActiveSlide}
        ref={sliderRef}
      >
        {slice.items.map((sliceItem, index) => {
          const thumbnailMobile = sliceItem.media.hasOwnProperty("mobile")
            ? sliceItem.media.mobile
            : sliceItem.media;

          const thumbnailDesktop = sliceItem.media;

          return (
            <Slide key={`key-${index + 1}`}>
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
                  />
                </motion.div>
                <SlideImageOverlay />
              </SlideImage>
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
                className={`content_${
                  CaptionPostionDesktop[
                    sliceItem.caption_position ?? "Left Bottom"
                  ]
                } content_${
                  CaptionPostionMobile[
                    sliceItem.caption_position_mobile ?? "Bottom"
                  ]
                }`}
              >
                <TextBalloon
                  variant={CaptionColor[sliceItem.caption_color ?? "Blue"]}
                  arrowPositionDesktop={
                    ArrowPosition[sliceItem.caption_position]
                  }
                  arrowPositionMobile={
                    ArrowPosition[sliceItem.caption_position_mobile]
                  }
                >
                  {sliceItem.heading ? (
                    <>
                      <Typography
                        color="white"
                        variant="h5Alt2"
                        component={index === 0 ? "h1" : "h2"}
                        textShadow
                      >
                        {sliceItem.heading}
                      </Typography>
                      <Spacer />
                    </>
                  ) : null}
                  <Typography variant="body3" component="p" color="white">
                    {sliceItem.caption
                      ? sliceItem.caption
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur velit dignissim enim elementum sollicitudin."}
                  </Typography>
                </TextBalloon>
              </SlideText>
            </Slide>
          );
        })}
      </Slider>
      {slidesDurationArray.length > 0 && (
        <DurationWrapper>
          {slice.items.map((sliceItem, index) => (
            <DurationIndicator
              key={`key-${index + 1}`}
              setComplete={index === activeSlide ? true : false}
            />
          ))}
        </DurationWrapper>
      )}
      <DesktopSlideNavigationWrapper>
        {activeSlide !== 0 && (
          <IconButton
            onClick={prevSlide}
            icon={
              <Arrow
                height="4rem"
                width="4rem"
                color="var(--cranberry)"
                style={{ transform: "scaleX(-1)" }}
              />
            }
            style={{ margin: "0 auto 0 0" }}
          />
        )}
        {activeSlide < slice.items.length - 1 && (
          <IconButton
            onClick={nextSlide}
            icon={<Arrow height="4rem" color="var(--cranberry)" width="4rem" />}
            style={{ margin: "0 0 0 auto" }}
          />
        )}
      </DesktopSlideNavigationWrapper>
      <CloseButton>
        <IconButton
          icon={<Cross color="var(--cranberry)" height="4rem" width="4rem" />}
          onClick={(e) => handleClosePage(e)}
        />
      </CloseButton>
    </SliderWrapper>
  );
};

export default StorySlide;
