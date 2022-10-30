import React, { useRef, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { useDrag } from "@use-gesture/react";

import { motion } from "framer-motion";

import styled from "styled-components";
import { useMotionValue } from "framer-motion";

interface SliderProps {
  insetLeft?: string;
  insetRight?: string;
}

const Slider = styled(motion.div)<SliderProps>`
  cursor: grab;
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  padding-left: ${({ insetLeft }) => insetLeft};
  margin-right: ${({ insetRight }) => insetRight};
`;

const SliderWrap = ({
  children,
  sliderRef,
  x,
  sliderConstraints,
  bounceStiffness,
  bounceDamping,
  insetLeft = "0px",
  insetRight = "0px",
}) => {
  const [removeScrollEnabled, setRemoveScrollEnabled] = useState(false);
  const [horizontalDragEnabled, setHorizontalDragEnabled] = useState(false);

  const setRemoveScrollState = () => {
    setRemoveScrollEnabled(false);
    setHorizontalDragEnabled(false);
  };

  const bind: any = useDrag(({ movement: [mx, my] }) => {
    let horizontalScroll = false;
    let verticalScroll = true;

    if (mx > 5 || mx < -5) {
      horizontalScroll = true;
    }

    if (horizontalDragEnabled) {
      if (my > 5 || my < -5) {
        verticalScroll = true;
      }
      if ((my > 2 && !horizontalScroll) || (my < -2 && !horizontalScroll)) {
        setRemoveScrollEnabled(false);
        setHorizontalDragEnabled(false);
      }
    }

    if ((mx > 5 && !verticalScroll) || (mx < -5 && !verticalScroll)) {
      setRemoveScrollEnabled(true);
      setHorizontalDragEnabled(true);
    }
  });

  return (
    <RemoveScroll enabled={removeScrollEnabled}>
      <div
        {...bind()}
        style={{ overflowX: "hidden" }}
        onTouchEnd={setRemoveScrollState}
      >
        <Slider
          ref={sliderRef}
          drag="x"
          initial={{ x: 0 }}
          style={{ x }}
          dragConstraints={{
            left: -sliderConstraints,
            right: 0,
          }}
          dragTransition={{ bounceStiffness, bounceDamping }}
          insetLeft={insetLeft}
          insetRight={insetRight}
        >
          {children}
        </Slider>
      </div>
    </RemoveScroll>
  );
};

const Carousel = ({
  children,
  bounceStiffness = 100, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
  bounceDamping = 10, // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
  insetRight = "0px",
  insetLeft = "0px",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState(0);

  useEffect(() => {
    if (!ref && !ref.current) return;

    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(ref?.current?.scrollWidth);
    };

    calcSliderChildrenWidth();

    const calcSliderWidth = () => {
      setSliderWidth(ref?.current?.clientWidth);
    };

    calcSliderWidth();
    window.addEventListener("resize", calcSliderWidth);

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth);
    };

    calcSliderConstraints();
    window.addEventListener("resize", calcSliderConstraints);
  }, [ref, sliderChildrenWidth, sliderWidth]);

  return (
    <SliderWrap
      sliderRef={ref}
      x={x}
      sliderConstraints={sliderConstraints}
      bounceStiffness={bounceStiffness}
      bounceDamping={bounceDamping}
      insetRight={insetRight}
      insetLeft={insetLeft}
    >
      <>{children}</>
    </SliderWrap>
  );
};

export default Carousel;
