import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import Props from "./IconButton.types";

const StyledIconButton = styled(motion.button)`
  cursor: pointer;
  border: none;
  height: ${(props) => (props.size === "large" ? "40px" : "24px")};
  width: ${(props) => (props.size === "large" ? "40px" : "24px")};
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
