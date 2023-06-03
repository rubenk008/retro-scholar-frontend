import React, { useEffect, useRef, useState } from "react";
import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock-upgrade";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useWindowSize } from "../../../hooks/useWindowSize";
import isMobile from "../../../utils/isMobile";

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--bay-of-many);
  position: fixed;
  z-index: 999999999;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
`;

const Wrapper = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9999999999;
  padding: 0;
  max-height: 100vh;
  height: var(--app-height);

  @media screen and (min-width: 1024px) {
    padding: 2rem 0;
    max-height: 100%;
    height: auto;
  }
`;

const WrapperAll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999999;
  padding: 0;
`;

const ArticleExpanded = ({ children, onClick }) => {
  const ref = useRef();

  useEffect(() => {
    disableBodyScroll(ref.current);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  const [isMobileView, setIsMobileView] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

  return (
    <WrapperAll ref={ref}>
      {!isMobileView && (
        <Overlay
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
        ></Overlay>
      )}
      <Wrapper
        initial={{ scale: 0.8, translateY: "100vh" }}
        animate={{ scale: 1, translateY: "0vh" }}
        exit={{
          scale: 0.8,
          translateY: "100vh",
          transition: { duration: 0.3, ease: "easeIn" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </Wrapper>
    </WrapperAll>
  );
};

export default ArticleExpanded;
