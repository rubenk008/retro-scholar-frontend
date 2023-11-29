import clsx from "clsx";
import { motion, useAnimate } from "framer-motion";

import styled from "styled-components";
import Props from "./QuizCard.types";
import { useState } from "react";

const CardWrapper = styled(motion.div)`
  perspective: 1800px;
  transformstyle: preserve-3d;
  position: relative;
  height: calc((336 / 414) * 100vw);
  width: calc((520 / 414) * 100vw);
  max-height: 495px;
  max-width: 900px;

  @media (min-width: 769px) {
    height: calc((495 / 1440) * 100vw);
    width: calc((900 / 1440) * 100vw);
  }
`;

const CardFront = styled(motion.div)`
  border: none;
  display: grid;
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  background: var(--slight-titan-white);
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

const CardBack = styled(motion.div)`
  border: none;
  display: grid;
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  background: var(--tutu);
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
`;

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 50,
};

const QuizCard = ({ className, children, ...props }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardFront
        className={clsx(className)}
        animate={{
          rotateX: isFlipped ? -180 : 0,
          y: isFlipped ? "-100%" : 0,
          boxShadow: isFlipped
            ? "0px 8px 27px 4px rgba(9,25,189,0)"
            : "0px 8px 27px 4px rgba(9,25,189,0.2)",
        }}
        transition={spring}
        style={{ zIndex: isFlipped ? 0 : 1 }}
        {...props}
      >
        {children}
      </CardFront>
      <CardBack
        animate={{
          rotateX: isFlipped ? 0 : 180,
          y: isFlipped ? 0 : "-100%",
          boxShadow: isFlipped
            ? "0px 8px 27px 4px rgba(9,25,189,0.2)"
            : "0px 8px 27px 4px rgba(9,25,189,0)",
        }}
        transition={spring}
        style={{
          zIndex: isFlipped ? 1 : 0,
        }}
        {...props}
      >
        {children}
      </CardBack>
    </CardWrapper>
  );
};

export default QuizCard;
