import * as React from "react";

// eslint-disable-next-line react/display-name
const Instagram = React.forwardRef(
  (
    { height = 22, width = 22, ...props }: React.SVGProps<SVGSVGElement>,
    ref
  ) => {
    return (
      <svg
        viewBox="0 0 22 22"
        fill="none"
        height={height}
        width={width}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H21.998V22H0V0ZM11.004 14.2481C12.7968 14.2481 14.2501 12.7947 14.2501 11.0019C14.2501 9.2091 12.7968 7.75575 11.004 7.75575C9.21117 7.75575 7.75781 9.2091 7.75781 11.0019C7.75781 12.7947 9.21117 14.2481 11.004 14.2481ZM11.004 16.2481C13.9013 16.2481 16.2501 13.8993 16.2501 11.0019C16.2501 8.10453 13.9013 5.75575 11.004 5.75575C8.1066 5.75575 5.75781 8.10453 5.75781 11.0019C5.75781 13.8993 8.1066 16.2481 11.004 16.2481ZM16.8679 5.86839C17.678 5.86839 18.3346 5.21174 18.3346 4.40173C18.3346 3.59171 17.678 2.93506 16.8679 2.93506C16.0579 2.93506 15.4013 3.59171 15.4013 4.40173C15.4013 5.21174 16.0579 5.86839 16.8679 5.86839Z"
          fill="white"
        />
      </svg>
    );
  }
);

export default Instagram;
