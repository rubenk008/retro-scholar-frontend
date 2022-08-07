import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Props from "./IconButton.types";
import pxToRem from "../../utils/pxToRem";

const StyledIconButton = styled(motion.button)<{ size: "large" }>`
  cursor: pointer;
  border: none;
  height: ${(props) => (props.size === "large" ? pxToRem(40) : pxToRem(24))};
  width: ${(props) => (props.size === "large" ? pxToRem(40) : pxToRem(24))};
  border-radius: 100px;
  display: grid;
  box-sizing: border-box;
  padding: 0;
  background: var(--white);
`;

const IconButton = ({
  variant = "default",
  size = "large",
  onClick,
  icon,
  className,
  disabled,
  component = "button",
}: Props) => {
  return (
    <StyledIconButton
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
        {icon}
      </motion.div>
    </StyledIconButton>
  );
};

export default IconButton;
