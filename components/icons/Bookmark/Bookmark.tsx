import * as React from "react";

// eslint-disable-next-line react/display-name
const Bookmark = React.forwardRef(
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
          d="M25.9389 30.0792L26.1 30.2035V30V10V9.9H26H14H13.9V10V30V30.2035L14.0611 30.0792L20 25.4967L25.9389 30.0792ZM24.3 26.541L20.0611 23.2703L20 23.2231L19.9389 23.2703L15.7 26.541V11.7H24.3V26.541Z"
          fill={color}
          stroke={color}
          stroke-width="0.2"
        />
      </svg>
    );
  }
);

export default Bookmark;
