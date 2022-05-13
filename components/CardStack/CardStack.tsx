import React, { useState, Children } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { StackCardContainer } from "./StackCardContainer";

const Frame = styled(motion.div)`
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
`;

const CardStack = ({ children, onVote, ...props }) => {
  const [stack, setStack] = useState(Children.toArray(children));

  const pop = (array) => {
    return array.filter((_, index) => {
      return index < array.length - 1;
    });
  };

  const handleVote = (item) => {
    // update the stack
    let newStack = pop(stack);
    setStack(newStack);

    // run function from onVote prop, passing the current item and value of vote
    onVote(item);
  };

  return (
    <>
      <Frame {...props}>
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1;
          return (
            <StackCardContainer
              drag={isTop}
              key={item.key || index}
              onVote={(item) => handleVote(item)}
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
