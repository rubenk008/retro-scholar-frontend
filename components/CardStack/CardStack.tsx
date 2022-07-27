import React, { useState, Children, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { StackCardContainer } from "./StackCardContainer";
import CardStackProps from "./CardStack.types";

const Frame = styled(motion.div)`
  width: 100%;
  height: calc(304 / 414 * 100vw);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    height: 520px;
    justify-content: center;
    align-items: center;
  }
`;

const CardStack = ({
  children,
  triggerAutoAnimation,
  onVote,
  ...props
}: CardStackProps) => {
  const restoredStack = Children.toArray(children);
  const [stack, setStack] = useState(Children.toArray(children));

  const [isBeingRestacked, setIsBeingRestacked] = useState(false);

  const pop = (array) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  useEffect(() => {
    if (stack.length === 0) {
      setTimeout(() => {
        onVote(restoredStack.length);
        setIsBeingRestacked(true);
        setStack(restoredStack);
      }, 500);
    }
  }, [stack]);

  useEffect(() => {
    if (isBeingRestacked) {
      setIsBeingRestacked(false);
    }
  }, [isBeingRestacked]);

  const handleVote = (item) => {
    // update the stack
    let newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item.props.itemID);
  };

  return (
    <>
      <Frame {...props}>
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1;
          return (
            <StackCardContainer
              drag={isTop}
              key={`uid-${index + 1}`}
              onVote={() => handleVote(item)}
              restacked={isBeingRestacked}
              delayRestacking={index * 100}
              triggerAutoAnimation={
                isTop && triggerAutoAnimation ? true : false
              }
            >
              {item}
            </StackCardContainer>
          );
        })}
      </Frame>
    </>
  );
};

export default CardStack;
