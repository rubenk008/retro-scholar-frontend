import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import useDimensions from "../../hooks/useDimensions";

import { Context } from "./SliderContext";

const ItemWrapper = styled.div`
  flex: 0 0 auto;

  &:not(:last-child) {
    padding-right: ${(props) => props.gap}px;
  }
`;

const Item = ({ children, gap, padding }) => {
  const { dispatch } = useContext(Context);
  const [itemRef, { x }] = useDimensions();

  useEffect(() => {
    x && dispatch({ type: "ADD_ITEM", item: x - padding });
  }, [x]);

  return (
    <ItemWrapper ref={itemRef} gap={gap}>
      {children}
    </ItemWrapper>
  );
};

export default Item;
