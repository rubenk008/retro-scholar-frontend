import React, { useContext } from "react";
import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import useDimensions from "../../hooks/useDimensions";
import { useWindowSize } from "../../hooks/useWindowSize";

import { Context } from "./SliderContext";

const Wrapper = styled.div`
  width: 100%;
`;

const StyledTrack = styled(motion.div)`
  display: flex;
  flex-wrap: nowrap;
  min-width: min-content;
  padding: ${(props) => props.padding}px;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Track = ({ children, padding, velocity, transition }) => {
  const [trackRef, trackDimensions] = useDimensions();
  const windowDimensions = useWindowSize();
  const controls = useAnimationControls();

  const { state, dispatch } = useContext(Context);
  const negativeItems = state.items.map(
    (item) => item * -1 + trackDimensions.x || 0
  );

  function onDragEnd(event, info) {
    const offset = info.offset.x;
    const correctedVelocity = info.velocity.x * velocity;

    const direction = correctedVelocity < 0 || offset < 0 ? 1 : -1;
    const startPosition = info.point.x - offset;

    const endOffset =
      direction === 1
        ? Math.min(correctedVelocity, offset)
        : Math.max(correctedVelocity, offset);
    const endPosition = startPosition + endOffset;

    const closestPosition = negativeItems.reduce((prev, curr) => {
      // console.log("endPosition", endPosition);
      // console.log("math curr", curr, Math.abs(curr - endPosition));
      // console.log("math prev", prev, Math.abs(prev - endPosition));

      return Math.abs(curr - endPosition) < Math.abs(prev - endPosition)
        ? curr
        : prev;
    });

    const activeSlide = negativeItems.indexOf(closestPosition);

    // console.log("active slide", 1);
    dispatch({ type: "SET_ACTIVE_ITEM", activeItem: activeSlide });

    controls.start({
      x: Math.max(
        closestPosition,
        windowDimensions.width - trackDimensions.width - trackDimensions.x || 0
      ),
      transition,
    });
  }

  return (
    <Wrapper>
      <StyledTrack
        ref={trackRef}
        padding={padding}
        animate={controls}
        drag="x"
        dragConstraints={{
          left:
            windowDimensions.width - trackDimensions.width - trackDimensions.x,
          right: 0 + trackDimensions.x,
        }}
        onDragEnd={onDragEnd}
      >
        {children}
      </StyledTrack>
    </Wrapper>
  );
};

export default Track;
