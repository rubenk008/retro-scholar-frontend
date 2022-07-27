import * as React from "react";

// eslint-disable-next-line react/display-name
const Search = React.forwardRef(
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
          d="M11 18.2538C11 22.2537 14.254 25.5075 18.2534 25.5075C19.9638 25.5075 21.5378 24.9124 22.7793 23.9184L27.6242 28.7635C27.7813 28.921 27.9876 28.9997 28.1939 28.9997C28.4001 28.9997 28.6064 28.921 28.7638 28.7635C29.0787 28.4489 29.0787 27.9385 28.7638 27.6238L23.9188 22.7786C24.9122 21.5372 25.5068 19.9636 25.5068 18.2538C25.5068 14.2539 22.2531 11 18.2534 11C14.2537 11 11 14.2541 11 18.2538ZM12.612 18.2535C12.612 15.1428 15.1426 12.6118 18.2534 12.6118C21.3642 12.6118 23.8951 15.1428 23.8948 18.2535C23.8948 21.3644 21.3639 23.8954 18.2534 23.8954C15.1429 23.8954 12.612 21.3644 12.612 18.2535Z"
          fill={color}
        />
      </svg>
    );
  }
);

export default Search;
