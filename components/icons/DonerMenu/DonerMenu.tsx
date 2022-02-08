import * as React from "react";

const DonerMenu = React.forwardRef(
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
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 18H10V16H30V18Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 24L16 24V22L30 22V24Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default DonerMenu;
