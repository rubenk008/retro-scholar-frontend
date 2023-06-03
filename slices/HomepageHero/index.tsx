import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import pxToRem from "../../utils/pxToRem";

import Card from "../../components/Card";
import CardStack from "../../components/CardStack";
import Media from "../../components/Media";
import Typography from "../../components/Typography";
import Link from "next/link";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  // background: var(--bay-of-many);
  padding: ${pxToRem(133)} ${pxToRem(32)} 0;
  position: relative;
  overflow-x: hidden;
  display: flex;

  @media screen and (min-width: 1024px) {
    padding: 0 ${pxToRem(120)} ${pxToRem(60)};
    max-height: 76.8rem;
  }
`;

const Swiper = styled.div`
  z-index: 2;
  position: relative;
  display: flex;
  align-self: flex-start;
  flex-direction: column-reverse;
  justify-content: space-between;
  max-width: 118rem;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 118rem;
    max-width: 118rem;
    height: 52rem;
    align-self: flex-end;
  }
`;

const SwiperSlides = styled.div`
  padding-top: ${pxToRem(32)};
  width: 32rem;
  max-width: 32rem;
  height: 20.4rem;
  max-height: 20.4rem;
  position: relative;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding-top: ${pxToRem(55)};
    min-width: 54rem;
    max-width: 54rem;
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

  > * > h3 {
    transition: all 250ms ease;
  }

  &:hover {
    > * > h3 {
      text-shadow: 0.3rem 0.3rem 0px var(--azalea);
      transform: translate(-0.4rem, -0.4rem);
      transition: all 250ms ease;
    }
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
    width: 6rem;
    max-width: 6rem;
    height: 0.2rem;
    max-height: 0.2rem;
    margin: 0 1.4rem 0 1.4rem;
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
    width: 0.2rem
    max-width: 0.2rem
    height: 18rem;
    max-height: 18rem;
    right: 6.8rem;
    bottom: 0;
  }
`;

const ScrollIndicatorDesc = styled.div`
  position: absolute;
  top: -42px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);

  @media screen and (min-width: 1024px) {
    top: -4.2rem;
  }
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
              <Link
                style={{
                  display:
                    sliceItem.id === slice.items[activeSlide].id ? "" : "none",
                }}
                key={`article-${index}`}
                href={`/?article=${sliceItem.uid}`}
                as={`/article/${sliceItem.uid}`}
                scroll={false}
                shallow={true}
              >
                <span style={{ textTransform: "capitalize" }}>
                  <Typography variant="subtitle3" component={"h2"}>
                    {sliceItem.category[0].text}
                  </Typography>
                </span>

                <Typography variant="h2" component={"h3"}>
                  {sliceItem.title}
                </Typography>
              </Link>
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
                  url: sliceItem.thumbnail.hasOwnProperty("square")
                    ? sliceItem.thumbnail.square.url
                    : sliceItem.thumbnail.url,
                  alt: sliceItem.thumbnail.alt,
                  priority: index === slice.items.length - 1 ? true : false,
                }}
                withHalftone
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
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </ScrollIndicator>
    </Section>
  );
};

export default HomepageHero;
