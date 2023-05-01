import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface OwnProps {
  setComplete?: boolean;
}

const DurationIndicatorWrapper = styled.div`
  grid-row: 1;
  width: auto;
  height: calc(4 / 414 * 100vw);
  max-height: 4px;
  position: relative;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;

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
  transform-origin: left center;
  pointer-events: none;
`;

const DurationIndicator = ({ setComplete = false }: OwnProps) => {
  return (
    <>
      <DurationIndicatorWrapper>
        <DurationIndicatorProgress
          style={{ scaleX: setComplete ? 1.0 : 0.0 }}
        />
      </DurationIndicatorWrapper>
    </>
  );
};

export default DurationIndicator;
