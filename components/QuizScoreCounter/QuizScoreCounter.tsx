import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Typography from "../Typography";

import { animate, motion, useAnimation, useAnimate } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 9.5rem;
  height: 4.8rem;
  background-color: var(--gigas);

  @media (min-width: 768px) {
    width: 12rem;
    height: 15rem;
  }
`;

const Counter = styled(motion.span)`
  overflow: hidden;
  font-size: 2.6rem;
  color: var(--white);
  line-height: 0.9em;
  font-family: var(--font-rift-soft-bold);

  @media (min-width: 768px) {
    font-size: 4.4rem;
  }
`;

const QuizScoreCounter = ({ oldScore, newScore }) => {
  const nodeRef = useRef<HTMLSpanElement>();
  const controlsNew = useAnimation();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(oldScore, newScore, {
      duration: 4,

      onUpdate(value) {
        if (value === 0) return;

        controlsNew.start({
          scale: [1, 1.4, 1],
          transition: { duration: 0.01 },
        });
        if (node) {
          node.textContent = value.toFixed(0);
        }
      },
    });

    return () => controls.stop();
  }, [oldScore, newScore]);

  return (
    <Container>
      <Counter animate={controlsNew} ref={nodeRef}>
        {newScore}
      </Counter>
      <Typography variant="label" component="span" color="white">
        score
      </Typography>
    </Container>
  );
};

export default QuizScoreCounter;
