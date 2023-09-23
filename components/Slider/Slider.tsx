import React from "react";

import { ContextProvider } from "./SliderContext";
import Track from "./Track";
import Item from "./Item";

const Slider = ({ children, padding, gap, velocity, transition }) => {
  return (
    <ContextProvider>
      <Track padding={padding} velocity={velocity} transition={transition}>
        {children.map((child, i) => (
          <Item key={i} gap={gap} padding={padding}>
            {child}
          </Item>
        ))}
      </Track>
    </ContextProvider>
  );
};

Slider.defaultProps = {
  padding: 40,
  gap: 40,
  velocity: 0.4,
  transition: { type: "spring", damping: 200 },
};

export default Slider;
