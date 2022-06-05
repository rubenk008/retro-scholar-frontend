import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

import CardStackProps from "./CardStack.types";

const Container = styled(motion.div)<CardStackProps>`
  position: absolute;

  &.hasBeenRestacked {
    transition-delay: ${(props) => `${props.delayRestacking}ms !important`};
    transition: transform 500ms ease-out;
  }

  &.restacked {
    transform: translateX(100vw) !important;
  }
`;

export const StackCardContainer = ({
  children,
  onVote,
  restacked = false,
  delayRestacking = 0,
  triggerAutoAnimation,
  ...props
}: CardStackProps) => {
  const cardElem = useRef(null);
  const [hasBeenRestacked, setHasBeenRestacked] = useState(false);
  const [hasBeenAutoAnimated, setHasBeenAutoAnimated] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 },
  });
  const onDirectionLock = (axis) => setDragStart({ ...dragStart, axis: axis });

  const animateCardSwipe = (animation) => {
    setDragStart({ ...dragStart, animation });

    setTimeout(() => {
      setDragStart({ axis: null, animation: { x: 0, y: 0 } });
      x.set(0);
      y.set(0);
      onVote(cardElem.current);
    }, 200);
  };

  const onDragEnd = (info) => {
    if (dragStart.axis === "x") {
      if (info.offset.x >= 100) animateCardSwipe({ x: 1500, y: 0 });
      else if (info.offset.x <= -100) animateCardSwipe({ x: -1500, y: 0 });
    } else {
      if (info.offset.y >= 100) animateCardSwipe({ x: 0, y: 1000 });
      else if (info.offset.y <= -100) animateCardSwipe({ x: 0, y: -1000 });
    }
  };

  useEffect(() => {
    if (triggerAutoAnimation && !hasBeenAutoAnimated) {
      animateCardSwipe({ x: 1500, y: 0 });
      setHasBeenAutoAnimated(true);
    }
  }, [triggerAutoAnimation]);

  useEffect(() => {
    if (restacked) {
      setHasBeenRestacked(true);
    }
  }, [restacked]);

  useEffect(() => {
    setTimeout(() => {
      setHasBeenRestacked(false);
    }, 500 + delayRestacking);
  }, [hasBeenRestacked]);

  return (
    <Container
      className={clsx(
        restacked ? "restacked" : "",
        hasBeenRestacked ? "hasBeenRestacked" : ""
      )}
      delayRestacking={delayRestacking}
      animate={dragStart.animation}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      ref={cardElem}
      style={{ x, y }}
      dragDirectionLock
      onDirectionLock={(axis) => onDirectionLock(axis)}
      onDragEnd={(e, info) => onDragEnd(info)}
      whileTap={{ scale: 1.04 }}
      transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
      {...props}
    >
      {children}
    </Container>
  );
};
