import * as React from "react";

const ArrowCircle = ({
  height = 14,
  width = 14,
  color = "#283086",
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height={height}
      width={width}
      {...rest}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="2" />
      <path
        d="M13.5 7.5L18 12M18 12L13.5 16.5M18 12H6"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowCircle;
