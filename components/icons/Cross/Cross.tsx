import * as React from "react";

// eslint-disable-next-line react/display-name
const Cross = React.forwardRef(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.2757 12.2757C12.6432 11.9081 13.2391 11.9081 13.6067 12.2757L20 18.669L26.3933 12.2757C26.7609 11.9081 27.3568 11.9081 27.7243 12.2757C28.0919 12.6432 28.0919 13.2391 27.7243 13.6067L21.331 20L27.7243 26.3933C28.0919 26.7609 28.0919 27.3568 27.7243 27.7243C27.3568 28.0919 26.7609 28.0919 26.3933 27.7243L20 21.331L13.6067 27.7243C13.2391 28.0919 12.6432 28.0919 12.2757 27.7243C11.9081 27.3568 11.9081 26.7609 12.2757 26.3933L18.669 20L12.2757 13.6067C11.9081 13.2391 11.9081 12.6432 12.2757 12.2757Z"
          fill={color}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default Cross;
