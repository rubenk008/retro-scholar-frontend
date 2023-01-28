import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import pxToRem from "../../utils/pxToRem";

import Card from "../../components/Card";
import CardStack from "../../components/CardStack";
import Media from "../../components/Media";
import Typography from "../../components/Typography";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: var(--bay-of-many);
  padding: ${pxToRem(133)} ${pxToRem(32)} ${pxToRem(100)};
  position: relative;
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem(188)} ${pxToRem(120)} ${pxToRem(60)};
  }
`;

const Swiper = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  max-width: calc(1180 / 1440 * 100vw);
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1600px;
  }
`;

const SwiperSlides = styled.div`
  padding-top: ${pxToRem(32)};
  max-width: calc(320 / 414 * 100vw);
  max-width: 320px;
  height: calc(204 / 414 * 100vw);
  max-height: 204px;
  position: relative;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding-top: ${pxToRem(55)};
    max-width: calc(540 / 1440 * 100vw);
    min-width: 540px;
    max-width: 540px;
    height: auto;
    max-height: auto;
  }
`;

const SwiperContent = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 400ms;

  &.isActive {
    transition-delay: 300ms;
    opacity: 1;
  }
`;

const SlideCountIndicator = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 14px;
  bottom: -42px;
  left: 0;

  > span {
    width: 15px;
  }

  @media screen and (min-width: 1024px) {
    bottom: 0;
  }
`;

const SlideDuration = styled.div`
  width: calc(48 / 414 * 100vw);
  max-width: 48px;
  height: calc(2 / 414 * 100vw);
  max-height: 2px;
  position: relative;
  background: var(--gigas);
  margin: 0 calc(8 / 414 * 100vw) 0 calc(6 / 414 * 100vw);

  @media screen and (min-width: 1024px) {
    width: calc(60 / 1440 * 100vw);
    max-width: 60px;
    height: calc(2 / 1440 * 100vw);
    max-height: 2px;
    margin: 0 calc(14 / 1440 * 100vw) 0 calc(12 / 1440 * 100vw);
  }
`;

const SlideDurationProgress = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--chetwode-blue);
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  transform: scaleX(0.4);
  transform-origin: left center;
`;

const ScrollIndicator = styled.div`
  z-index: 1;
  width: calc(2 / 414 * 100vw);
  max-width: 2px;
  height: calc(132 / 414 * 100vw);
  max-height: 132px;
  position: absolute;
  background: var(--gigas);
  right: calc(31 / 414 * 100vw);
  bottom: 0;

  @media screen and (min-width: 1024px) {
    width: calc(2 / 1440 * 100vw);
    max-width: 2px;
    height: calc(180 / 1440 * 100vw);
    max-height: 180px;
    right: calc(68 / 1440 * 100vw);
    bottom: 0;
  }
`;

const ScrollIndicatorDesc = styled.div`
  position: absolute;
  top: -42px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
`;

const ScrollIndicatorProgress = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--chetwode-blue);
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  transform: scaleY(0.4);
  transform-origin: center top;
`;

const HomepageHero = ({ slice }) => {
  const [activeSlide, setActiveSlide] = useState(slice.items.length - 1);
  const [slideCount, setSlideCount] = useState(1);
  const [slideTimerEnded, setSlideTimerEnded] = useState(false);

  const slideDurationAnimationControls = useAnimation();

  const getRevertedSliceIndex = (index) => {
    const itemInNormalArray = slice.items[index];
    const itemsArray = [...slice.items];
    const reversedArray = itemsArray.reverse();

    if (index >= 0) {
      const indexInReversedArray = reversedArray.findIndex((item) => {
        if (item !== undefined) {
          return item.title === itemInNormalArray.title;
        }
      });
      setSlideCount(indexInReversedArray + 1);
    }
  };

  const restartSlideDurationAnimation = () => {
    slideDurationAnimationControls.set({ scaleX: 0 });
    slideDurationAnimationControls.start({
      scaleX: 1,
      transition: { ease: "linear", duration: 5 },
    });
  };

  const onEndTimerAnimation = () => {
    setSlideTimerEnded(true);
    setTimeout(() => {
      setSlideTimerEnded(false);
    }, 1);
  };

  // initial slide duration animation
  useEffect(() => {
    restartSlideDurationAnimation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reset slide duration animation
  useEffect(() => {
    restartSlideDurationAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide]);

  return (
    <Section>
      <Swiper>
        <SwiperSlides>
          {slice.items.map((sliceItem, index) => (
            <SwiperContent
              key={`${index}-key`}
              className={
                sliceItem.id === slice.items[activeSlide].id ? "isActive" : ""
              }
            >
              <span style={{ textTransform: "capitalize" }}>
                <Typography variant="subtitle3" component={"h2"}>
                  {sliceItem.category[0].text}
                </Typography>
              </span>

              <Typography variant="h2" component={"h3"}>
                {sliceItem.title}
              </Typography>
            </SwiperContent>
          ))}
        </SwiperSlides>
        <CardStack
          onVote={(itemID: number) => {
            const nextIndex = itemID - 1;

            if (nextIndex !== -1) {
              setActiveSlide(nextIndex);
            }

            if (nextIndex === -1) {
              setActiveSlide(slice.items.length - 1);
            }

            getRevertedSliceIndex(nextIndex);
          }}
          triggerAutoAnimation={slideTimerEnded}
        >
          {slice.items.map((sliceItem, index) => (
            <Card
              key={`${index}-key`}
              itemID={index}
              cardArticleId={sliceItem.id}
              variant="outlined"
              hasDropShadow={true}
              hasRandomRotation={true}
              whileTap={{ scale: 1.15 }}
            >
              <Media
                type="image"
                image={{
                  url: sliceItem.thumbnail.url,
                  alt: sliceItem.thumbnail.alt,
                  priority: index === slice.items.length - 1 ? true : false,
                }}
              />
            </Card>
          ))}
        </CardStack>
        <SlideCountIndicator>
          <Typography variant="h6Small" color="off-white" component={"span"}>
            {("0" + slideCount).slice(-2)}
          </Typography>
          <SlideDuration>
            <SlideDurationProgress
              initial={{ scaleX: 0 }}
              animate={slideDurationAnimationControls}
              onAnimationComplete={onEndTimerAnimation}
            />
          </SlideDuration>
          <Typography variant="h6Small" color="off-white" component={"span"}>
            {("0" + slice.items.length).slice(-2)}
          </Typography>
        </SlideCountIndicator>
      </Swiper>
      <ScrollIndicator>
        <ScrollIndicatorDesc>
          <Typography variant="h6Small" color="off-white" component={"span"}>
            scroll
          </Typography>
        </ScrollIndicatorDesc>
        <ScrollIndicatorProgress
          animate={{
            scaleY: [0, 1, 1, 0],
            originY: ["0%", "0%", "100%", "100%"],
          }}
          transition={{
            duration: 2,
            type: "spring",
            mass: 1.5,
            stiffness: 200,
            repeat: Infinity,
          }}
        />
      </ScrollIndicator>
    </Section>
  );
};

export default HomepageHero;
