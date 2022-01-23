import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Props from "./Button.types";

const ButtonContent = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
  },
  visible: {
    x: -4,
    y: -4,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  hover: {
    x: -8,
    y: -8,
    transition: {
      duration: 0.2,
    },
  },
};

const LeftEdgeAnim = {
  hidden: {
    x: -4,
    scale: 0,
  },
  visible: {
    x: -4,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    x: -4,
    scale: 2,
    transition: {
      duration: 0.2,
    },
  },
};

const BottomEdgeAnim = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scaleY: 2,
    transition: {
      duration: 0.2,
    },
  },
};

const RightEdgeAnim = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scaleX: 2,
    transition: {
      duration: 0.2,
    },
  },
};

const TopEdgeAnim = {
  hidden: {
    y: -4,
    scale: 0,
  },
  visible: {
    y: -4,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    y: -4,
    scale: 2,
    transition: {
      duration: 0.2,
    },
  },
};

const StyledButton = styled(motion.button)`
  font-family: "Rift Soft Bold";
  font-size: 28px;
  cursor: pointer;
  border: none;
  height: 56px;
  display: grid;
  box-sizing: border-box;
  padding: 0;
  background: none;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 1;
  position: relative;
`;

const BackdropRightEdge = styled(motion.div)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: var(--cranberry);
  transform-origin: 100% 0px;
  width: 4px;
  transform: scaleX(1);
`;

const BackdropTopEdge = styled(motion.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0px;
  height: 0px;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid var(--cranberry);
  transform-origin: right center;
`;

const BackdropBottomEdge = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: var(--cranberry);
  transform-origin: 0px 100%;
  height: 4px;
`;

const BackdropLeftEdge = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--cranberry);
  transform-origin: center bottom;
`;

const ContentWrapper = styled(motion.div)`
  height: 100%;
  padding-left: 48px;
  padding-right: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lavender-blush);
  color: var(--cranberry);
  letter-spacing: 1px;
  grid-row: 1;
  grid-column: 1;
  line-height: 0;
  transform-origin: center;
`;

const Button = ({
  variant = "default",
  size = "large",
  onClick,
  children,
  className,
  disabled,
  component = "button",
}: Props) => {
  return (
    <StyledButton
      className={className}
      variant={variant}
      size={size}
      as={component}
      disabled={disabled}
      onClick={onClick}
    >
      <motion.div
        style={{ display: "grid", width: "100%", height: "100%" }}
        whileHover="hover"
        initial="hidden"
        animate="visible"
      >
        <Backdrop>
          <BackdropLeftEdge variants={LeftEdgeAnim} />
          <BackdropBottomEdge variants={BottomEdgeAnim} />
          <BackdropRightEdge variants={RightEdgeAnim} />
          <BackdropTopEdge variants={TopEdgeAnim} />
        </Backdrop>
        <ContentWrapper variants={ButtonContent}>{children}</ContentWrapper>
      </motion.div>
    </StyledButton>
  );
};

export default Button;
