import React from "react";
import clsx from "clsx";

import styled from "styled-components";
import { variant } from "styled-system";

import Props from "./Chip.types";

const ChipRoot = styled("div")<Props>(
  {
    borderWidth: "2px",
    borderStyle: "solid",
    width: "max-content",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    "&.small": {
      padding: "4px 6px 5px",
      height: "22px",
      fontSize: "12px",
      fontFamily: "Nunito Sans, sans-serif",
      lineHeight: "calc(9/12)",
    },

    "&.medium": {
      padding: "7px 12px",
      height: "28px",
      fontSize: "14px",
      fontFamily: "Nunito Sans, sans-serif",
      lineHeight: 1,
    },
  },
  variant({
    variants: {
      filled_primary: {
        borderColor: "var(--bay-of-many)",
        background: "var(--bay-of-many)",
        fontWeight: 600,
        color: "var(--white)",
      },
      filled_secondary: {
        borderColor: "var(--bay-of-many)",
        fontWeight: 600,
        color: "var(--bay-of-many)",
      },
      outlined_primary: {
        borderColor: "var(--bay-of-many)",
        color: "var(--bay-of-many)",
        fontWeight: 700,
      },
      outlined_secondary: {
        borderColor: "var(--cranberry)",
        color: "var(--cranberry)",
        fontWeight: 700,
      },
    },
  })
);

const IconContainer = styled.div`
  margin: 0 4px 0 -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14px;
  width: 14px;
`;

const Chip = ({
  variant = "filled",
  size = "small",
  color = "primary",
  children,
  Icon,
  className = "",
}: Props) => {
  return (
    <ChipRoot variant={`${variant}_${color}`} className={clsx(className, size)}>
      {Icon && <IconContainer>{Icon}</IconContainer>}
      {children}
    </ChipRoot>
  );
};

export default Chip;
