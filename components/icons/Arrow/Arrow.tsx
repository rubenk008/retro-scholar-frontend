import * as React from "react";

const Arrow = ({
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
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6705 19.284L21.6163 12.2299L22.8463 11L32 20.1537L22.8463 29.3075L21.6163 28.0776L28.6705 21.0234H8V19.284H28.6705Z"
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
