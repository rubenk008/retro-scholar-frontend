import clsx from "clsx";
import { motion } from "framer-motion";

import styled from "styled-components";
import Props from "./QuizCard.types";
import { useState } from "react";
import isMobile from "../../utils/isMobile";

const CardWrapper = styled(motion.div)`
  perspective: 1800px;
  transformstyle: preserve-3d;
  position: relative;
  height: calc((520 / 414) * 100vw);
  width: calc((336 / 414) * 100vw);
  max-height: 520px;
  max-width: 336px;

  @media (min-width: 769px) {
    height: calc((495 / 1440) * 100vw);
    width: calc((900 / 1440) * 100vw);
    max-height: 495px;
    max-width: 900px;
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

  const mobile = isMobile();

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <CardWrapper onClick={handleClick}>
      <CardFront
        className={clsx(className)}
        animate={
          mobile
            ? {
                rotateY: isFlipped ? -180 : 0,
                x: isFlipped ? "-50%" : 0,
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0)"
                  : "0px 8px 27px 4px rgba(9,25,189,0.2)",
              }
            : {
                rotateX: isFlipped ? -180 : 0,
                y: isFlipped ? "-100%" : 0,
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0)"
                  : "0px 8px 27px 4px rgba(9,25,189,0.2)",
              }
        }
        transition={spring}
        style={{ zIndex: isFlipped ? 0 : 1 }}
        {...props}
      >
        {children}
      </CardFront>
      <CardBack
        initial={
          mobile ? { rotateY: 180, x: "-50%" } : { rotateX: 180, y: "-100%" }
        }
        animate={
          mobile
            ? {
                rotateY: isFlipped ? 0 : 180,
                x: isFlipped ? 0 : "-50%",
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0.2)"
                  : "0px 8px 27px 4px rgba(9,25,189,0)",
              }
            : {
                rotateX: isFlipped ? 0 : 180,
                y: isFlipped ? 0 : "-100%",
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0.2)"
                  : "0px 8px 27px 4px rgba(9,25,189,0)",
              }
        }
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
