import * as React from "react";

const Facebook = React.forwardRef(
  (
    { height = 22, width = 22, ...props }: React.SVGProps<SVGSVGElement>,
    ref
  ) => {
    return (
      <svg
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        {...props}
      >
        <path
          d="M23.003 0.0110737C20.4974 0.0110737 0.998047 0 0.998047 0V22H2.21258H12.7513V13.4846H9.88381V10.1656H12.7513V7.71799C12.7513 4.87831 14.4865 3.33121 17.0221 3.33121C18.2377 3.33121 19.2801 3.42209 19.5841 3.46155V6.42976L17.8254 6.43049C16.4467 6.43049 16.1807 7.08547 16.1807 8.04602V10.1645H19.47L19.0399 13.4832H16.1804V21.9989H21.7874H23.003V1.22399V0.0110737Z"
          fill="white"
        />
      </svg>
    );
  }
);

export default Facebook;
