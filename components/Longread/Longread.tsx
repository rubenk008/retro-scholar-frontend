import React, { useRef, useEffect } from "react";

import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock-upgrade";

import styled from "styled-components";
import { motion } from "framer-motion";
import LongreadProps from "./Longread.types";

const Wrapper = styled(motion.div)`
  position: relative;
  top: 0;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100%;
  margin: auto;
  background: #fff;
  padding-bottom: 8rem;

  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 97vh;
    margin: 0 auto;
  }
`;

const Section = styled.div`
  height: 100%;
  width: 100%;

  > :last-child {
    padding-bottom: 8rem;
  }

  @media screen and (min-width: 1024px) {
    > :last-child {
      padding-bottom: 10rem;
    }
  }
`;

const Longread = ({ masthead, slicezone }: LongreadProps) => {
  const ref = useRef();

  useEffect(() => {
    disableBodyScroll(ref.current);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <Wrapper ref={ref}>
      <Section>
        {masthead}
        {slicezone}
      </Section>
    </Wrapper>
  );
};

export default Longread;
