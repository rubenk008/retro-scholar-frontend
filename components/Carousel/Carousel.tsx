import React, { useRef, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

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

  const setRemoveScrollState = () => {
    setRemoveScrollEnabled(removeScrollEnabled ? false : true);
  };

  return (
    <RemoveScroll enabled={removeScrollEnabled}>
      <div
        style={{ overflowX: "hidden" }}
        onTouchStart={setRemoveScrollState}
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
  const ref = useRef();
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
