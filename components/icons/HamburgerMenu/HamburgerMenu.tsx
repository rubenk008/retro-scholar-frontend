import * as React from "react";

// eslint-disable-next-line react/display-name
const HamburgerMenu = React.forwardRef(
  (
    {
      height = 40,
      width = 40,
      color = "white",
      ...props
    }: React.SVGProps<SVGSVGElement>,
    ref
  ) => {
    return (
      <svg
        height={height}
        width={width}
        {...props}
        viewBox="0 0 40 40"
        fill="none"
      >
        <line
          x1="10"
          y1="12.8"
          x2="30"
          y2="12.8"
          stroke={color}
          strokeWidth="2.4"
        />
        <line
          x1="16"
          y1="18.8"
          x2="30"
          y2="18.8"
          stroke={color}
          strokeWidth="2.4"
        />
        <line
          x1="22"
          y1="24.8"
          x2="30"
          y2="24.8"
          stroke={color}
          strokeWidth="2.4"
        />
      </svg>
    );
  }
);

export default HamburgerMenu;
