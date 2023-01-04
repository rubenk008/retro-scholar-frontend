import React, { useEffect, useRef } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 999999999;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9999999999;
  padding: 0;
  max-height: 100vh;
  height: var(--app-height);

  @media screen and (min-width: 1024px) {
    padding: 48px 0;
  }
`;

// const ArticleContent = styled(motion.div)`
//   position: relative;
//   overflow: hidden;
//   width: 84vw;
//   height: 100%;
//   margin: 0 auto;
//   background: #fff;
// `;

// const HeaderImage = styled.div`
//   height: 600px;
//   width: 100%;
// `;

const ArticleExpanded = ({ id, children, onClick }) => {
  const ref = useRef();

  useEffect(() => {
    disableBodyScroll(ref.current);

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div ref={ref}>
      <Overlay
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      ></Overlay>

      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default ArticleExpanded;
