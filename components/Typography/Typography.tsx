import React, { useEffect, useState } from "react";
import clsx from "clsx";

import styled from "styled-components";
import { variant } from "styled-system";

import pxToRem from "../../utils/pxToRem";

import Props from "./Typography.types";

const round = (value) => {
  return Math.round(value * 1e5) / 1e5;
};

const letterSpacing = (size: number, spacing: number) =>
  `${round(spacing / size)}em`;

const TypographyRoot = styled("span")<Props>(
  {
    all: "unset",
    padding: "0",
    margin: "0",
    display: "flex",
    userSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",

    "&.textShadow": {
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
    },

    "&.primary": {
      color: "var(--cranberry)",
    },

    "&.secondary": {
      color: "var(--bay-of-many)",
    },

    "&.off-white": {
      color: "var(--fog)",
    },

    "&.white": {
      color: "var(--white)",
    },
  },
  variant({
    variants: {
      h0: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(52), pxToRem(100)],
        letterSpacing: [letterSpacing(52, 0.52), letterSpacing(100, 1)],
        lineHeight: [0.88, 0.88],
      },
      h0Alt: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(52), pxToRem(88)],
        letterSpacing: [letterSpacing(52, 2.6), letterSpacing(88, 2.64)],
        lineHeight: [0.88, 0.9],
      },
      h1: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(52), pxToRem(80)],
        letterSpacing: [letterSpacing(52, 2.6), letterSpacing(80, 2.4)],
        lineHeight: [0.88, 0.88],
      },
      h2: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(40), pxToRem(76)],
        letterSpacing: [letterSpacing(40, 2), letterSpacing(76, 2.28)],
        lineHeight: [0.96, 0.92],
      },
      h3: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(38), pxToRem(64)],
        letterSpacing: [letterSpacing(38, 1.52), letterSpacing(64, 1.92)],
        lineHeight: [0.9, 0.9],
      },
      h4: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(32), pxToRem(44)],
        letterSpacing: [letterSpacing(32, 0.48), letterSpacing(44, 0.66)],
        lineHeight: [0.96, 0.9],
      },
      h4Alt: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(36), pxToRem(44)],
        letterSpacing: [letterSpacing(32, 0.48), letterSpacing(44, 0.66)],
        lineHeight: [0.96, 0.9],
      },
      h5: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(28), pxToRem(36)],
        letterSpacing: [letterSpacing(28, 0.56), letterSpacing(36, 0.72)],
        lineHeight: [1, 1],
      },
      h5Alt: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(24), pxToRem(32)],
        letterSpacing: [letterSpacing(24, 0.24), letterSpacing(32, 0.32)],
        lineHeight: [0.9, 1],
      },
      h6: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(16), pxToRem(24)],
        letterSpacing: [letterSpacing(24, 0.32), letterSpacing(24, 0.48)],
        lineHeight: [1, 1],
      },
      h6Alt: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(14), pxToRem(20)],
        letterSpacing: [letterSpacing(14, 0.252), letterSpacing(20, 0.4)],
        lineHeight: [1.625, 1.3],
      },
      h6Small: {
        fontFamily: "var(--font-rift-soft-bold)",
        fontSize: [pxToRem(14), pxToRem(16)],
        letterSpacing: [letterSpacing(14, 0.18), letterSpacing(16, 0.2)],
        lineHeight: [1.625, 1.4],
      },
      subtitle1: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 400,
        fontSize: [pxToRem(20), pxToRem(24)],
        letterSpacing: [letterSpacing(20, 0.4), letterSpacing(24, 0.48)],
        lineHeight: ["calc(30 / 20)", "calc(40 / 24)"],
      },
      subtitle2: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 600,
        fontSize: [pxToRem(16), pxToRem(20)],
        letterSpacing: [letterSpacing(16, 0.32), letterSpacing(20, 0.48)],
        lineHeight: [1, 1],
      },
      subtitle3: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 600,
        fontSize: [pxToRem(14), pxToRem(16)],
        letterSpacing: [letterSpacing(14, 0.28), letterSpacing(16, 0.32)],
        lineHeight: ["calc(22 / 14)", "calc(24 / 16)"],
      },
      intro: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 700,
        fontSize: [pxToRem(24), pxToRem(28)],
        letterSpacing: [letterSpacing(24, 0.36), letterSpacing(28, 0.42)],
        lineHeight: ["calc(36 / 24)", "calc(40 / 28)"],
      },
      body1: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 400,
        fontSize: [pxToRem(20), pxToRem(24)],
        letterSpacing: [letterSpacing(20, 0.3), letterSpacing(24, 0.36)],
        lineHeight: ["calc(34 / 20)", "calc(38 / 24)"],
      },
      body2: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 400,
        fontSize: [pxToRem(16), pxToRem(20)],
        letterSpacing: [letterSpacing(16, 0.24), letterSpacing(20, 0.3)],
        lineHeight: ["calc(28 / 16)", "calc(32 / 20)"],
      },
      body2alt: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 400,
        fontSize: [pxToRem(14), pxToRem(20)],
        letterSpacing: [letterSpacing(16, 0.1), letterSpacing(20, 0.1)],
        lineHeight: "auto",
      },
      body3: {
        fontFamily: "var(--font-nunito-sans)",
        fontWeight: 400,
        fontSize: [pxToRem(16), pxToRem(18)],
        letterSpacing: [letterSpacing(16, 0.24), letterSpacing(20, 0.3)],
        lineHeight: ["calc(28 / 16)", "calc(32 / 20)"],
      },
    },
  })
);

const defaultVariantMapping = {
  h0: "h1",
  h0Alt: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h5Alt: "h5",
  h6: "h6",
  h6Alt: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  subtitle3: "h6",
  intro: "p",
  body1: "p",
  body2: "p",
  body2alt: "p",
  body3: "p",
  inherit: "p",
};

// eslint-disable-next-line react/display-name
const Typography = React.forwardRef(
  (
    {
      variant = "body1",
      color = "primary",
      children,
      className = "",
      component = null,
      textShadow = false,
    }: Props,
    ref
  ) => {
    const [componentType, setComponentType] = useState<React.ElementType>();

    useEffect(() => {
      if (component !== null) {
        setComponentType(component);
      } else {
        setComponentType(defaultVariantMapping[variant]);
      }
    }, [component]);

    return (
      <TypographyRoot
        variant={variant}
        className={clsx(className, color, textShadow && "textShadow")}
        as={componentType}
        ref={ref}
      >
        {children}
      </TypographyRoot>
    );
  }
);

export default Typography;
