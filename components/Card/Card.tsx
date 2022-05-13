import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import styled from "styled-components";
import { variant } from "styled-system";

import Props from "./Card.types";

const ContentAnim = {
  hidden: {
    x: 0,
    y: 0,
    opacity: 0,
  },
  visible: {
    x: -8,
    y: -8,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },

  hover: {
    x: -16,
    y: -16,
    transition: {
      duration: 0.2,
    },
  },
};

const LeftEdgeAnim = {
  hidden: {
    x: -8,
    scale: 0,
  },
  visible: {
    x: -8,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    x: -8,
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
    y: -8,
    scale: 0,
  },
  visible: {
    y: -8,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    y: -8,
    scale: 2,
    transition: {
      duration: 0.2,
    },
  },
};

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
  background: var(--bay-of-many);
  transform-origin: 100% 0px;
  width: 8px;
  transform: scaleX(1);
`;

const BackdropTopEdge = styled(motion.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0px;
  height: 0px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid var(--bay-of-many);
  transform-origin: right center;
`;

const BackdropBottomEdge = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: var(--bay-of-many);
  transform-origin: 0px 100%;
  height: 8px;
`;

const BackdropLeftEdge = styled(motion.div)`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid var(--bay-of-many);
  transform-origin: center bottom;
`;

const ContentWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  grid-row: 1;
  grid-column: 1;
  line-height: 0;
  transform-origin: center;
  background: #fff;
`;

const CardRoot = styled(motion.div)<Props>(
  {
    cursor: "pointer",
    border: "none",
    display: "grid",
    boxSizing: "border-box",
    position: "relative",
    padding: 0,
  },
  variant({
    variants: {
      elevated: {
        "&.regular": {
          height: ["430px", "448px"],
          minWidth: ["276px", "288px"],
          maxWidth: ["276px", "288px"],
          marginRight: (props: { withMargin: boolean }) =>
            props.withMargin ? ["0", "0"] : ["24px", "32px"],
        },
        "&.small": {
          paddingBottom: [
            "calc(100% / (165 / 257.07))",
            "calc(100% / (276 / 448))",
          ],
          height: 0,
          width: "100%",
          maxHeight: "448px",
          maxWidth: "276px",
        },
      },
      outlined: {
        borderColor: "var(--slight-titan-white)",
        borderStyle: "solid",
        borderWidth: ["4px", "6px"],
        width: "calc(85vmin - 3rem)",
        height: "calc(85vmin - 3rem)",

        "@media screen and (min-width: 600px)": {
          width: "calc(22rem + 12vmin)",
          height: "calc(22rem + 12vmin)",
        },

        "@media screen and (min-width: 1024px)": {
          width: "calc(20rem + 10vw)",
          height: "calc(20rem + 10vw)",
        },

        "@media screen and (min-width: 1320px)": {
          width: "calc(20rem + 30vmin)",
          height: "calc(20rem + 30vmin)",
        },

        "&.hasDropShadow": {
          boxShadow: "0px 8px 27px 4px rgba(9,25,189,0.2)",
        },

        "&.hasRandomRotation": {
          transform: () => {
            let rotation = Math.random() * (5 - -5) + -5;
            return `rotate(${rotation}deg)`;
          },
        },
      },
      quiz: {
        background: "var(--slight-titan-white)",
        height: ["calc((336/414) * 100vw)", "calc((486/1440) * 100vw)"],
        width: ["calc((520/414) * 100vw)", "calc((900/1440) * 100vw)"],
        maxHeight: "486px",
        maxWidth: "900px",
        boxShadow: "0px 8px 27px 4px rgba(9,25,189,0.2)",
      },
    },
  })
);

const Card = ({
  variant = "elevated",
  size = "regular",
  withMargin = false,
  cardArticleId = 0,
  className,
  children,
  hasDropShadow = false,
  hasRandomRotation = false,
  ...props
}: Props) => {
  return (
    <CardRoot
      variant={variant}
      withMargin={withMargin}
      className={clsx(
        className,
        hasDropShadow ? "hasDropShadow" : "",
        hasRandomRotation ? "hasRandomRotation" : "",
        size
      )}
      {...props}
    >
      {variant === "elevated" && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "grid",
            width: "100%",
            height: "100%",
          }}
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
          <ContentWrapper
            layoutId={`card-container-${cardArticleId}`}
            variants={ContentAnim}
          >
            {children}
          </ContentWrapper>
        </motion.div>
      )}
      {variant === "outlined" && <>{children}</>}
    </CardRoot>
  );
};

export default Card;
