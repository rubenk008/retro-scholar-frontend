import React from "react";

import styled from "styled-components";

import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: var(--app-height);
  max-height: 100vh;
  height: var(--app-height);
  width: 100vw;
  background: var(--bay-of-many);
  opacity: 0;
  z-index: 1;
`;

const variants = {
  open: { opacity: 0.8, transition: { duration: 0.45 } },
  closed: { opacity: 0, transition: { duration: 0.45, delay: 0.25 } },
};

const Overlay = ({ isVisible, onClick }) => {
  return (
    <Container
      onClick={onClick}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
      animate={isVisible ? "open" : "closed"}
      variants={variants}
    />
  );
};

export default Overlay;
