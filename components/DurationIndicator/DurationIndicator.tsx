import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useCountdown } from "usehooks-ts";

interface OwnProps {
  slideNumber?: number;
  playAnimation?: boolean;
  pauseAnimation?: boolean;
  stoppingAnimation?: boolean;
  resetAnimation?: boolean;
  restartAnimation?: boolean;
  durationOfSlide?: number;
  setComplete?: boolean;
  endOfAnimation?: () => void;
}

const DurationIndicatorWrapper = styled.div`
  grid-row: 1;
  width: auto;
  height: calc(4 / 414 * 100vw);
  max-height: 4px;
  position: relative;
  background: rgba(255, 255, 255, 0.3);

  @media screen and (min-width: 1024px) {
    height: calc(4 / 1440 * 100vw);
    max-height: 4px;
  }
`;

const DurationIndicatorProgress = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--white);
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: left center;
`;

const DurationIndicator = ({
  slideNumber = 0,
  playAnimation = false,
  stoppingAnimation = false,
  resetAnimation = false,
  restartAnimation = false,
  pauseAnimation = false,
  durationOfSlide = 5,
  endOfAnimation,
  setComplete = false,
}: OwnProps) => {
  const durationAnimationControls = useAnimation();
  const [hasBeenPaused, setHasBeenPaused] = useState(false);
  const [count, { start, stop, reset }] = useCountdown({
    seconds: durationOfSlide,
    interval: 1000,
    isIncrement: false,
  });

  const resetingAnimation = () => {
    durationAnimationControls.set({ scaleX: setComplete ? 1.0 : 0.0 });
  };

  const startAnimation = () => {
    reset();
    start();
    durationAnimationControls.set({ scaleX: 0.0 });
    durationAnimationControls.start({
      scaleX: 1,
      transition: { ease: "linear", duration: durationOfSlide },
    });
  };

  const pauseThisAnimation = () => {
    durationAnimationControls.stop();
    stop();
  };

  const stopAnimation = () => {
    durationAnimationControls.set({ scaleX: setComplete ? 1.0 : 0.0 });
    durationAnimationControls.stop();
    stop();
  };

  const continueAnimation = () => {
    start();
    durationAnimationControls.start((current) => ({
      scaleX: 1,
      transition: { ease: "linear", duration: count + 1 },
    }));
  };

  useEffect(() => {
    if (pauseAnimation) {
      setHasBeenPaused(true);
      pauseThisAnimation();
    }
    if (!pauseAnimation && hasBeenPaused) {
      setHasBeenPaused(false);
      continueAnimation();
    }
  }, [pauseAnimation]);

  useEffect(() => {
    if (playAnimation) {
      startAnimation();
    }
  }, [playAnimation]);

  useEffect(() => {
    if (stoppingAnimation) {
      stopAnimation();
    }
  }, [stoppingAnimation]);

  useEffect(() => {
    if (restartAnimation) {
      startAnimation();
    }
  }, [restartAnimation]);

  useEffect(() => {
    if (resetAnimation) {
      resetingAnimation();
    }
  }, [resetAnimation]);

  return (
    <DurationIndicatorWrapper>
      <DurationIndicatorProgress
        initial={{ scaleX: setComplete ? 1.0 : 0.0 }}
        animate={durationAnimationControls}
        onAnimationComplete={() => {
          endOfAnimation();
        }}
      />
    </DurationIndicatorWrapper>
  );
};

export default DurationIndicator;
