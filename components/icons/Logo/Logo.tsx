import * as React from "react";

// eslint-disable-next-line react/display-name
const Logo = React.forwardRef(
  (
    {
      height = 60,
      width = 47,
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
        viewBox="0 0 60 47"
        fill="none"
      >
        <g clipPath="url(#clip0_1106_3127)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.6364 16.0455C4.72086 16.6008 5.92269 17.2588 6.5417 18.4043L5.62114 18.8987C5.17779 18.0782 4.27997 17.5469 3.15866 16.9727C3.05315 16.9187 2.94549 16.8643 2.83634 16.8091C1.85056 16.3105 0.743034 15.7504 -0.00140381 14.8861L0.791895 14.207C1.39264 14.9045 2.30576 15.3687 3.3301 15.8894C3.43118 15.9408 3.53335 15.9927 3.6364 16.0455Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.6871 12.4234C14.6074 10.6471 13.7196 8.7618 13.0386 6.799L14.0268 6.45825C14.6837 8.35145 15.54 10.1699 16.5814 11.8832L15.6871 12.4234Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.7682 0.594661C29.5234 2.78941 29.7109 5.01068 30.32 7.13382L29.3147 7.42046C28.6681 5.16687 28.4691 2.8091 28.7289 0.479492L29.7682 0.594661Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.208 2.77681C44.4911 2.11751 44.7065 1.56822 44.6515 1.03198L45.6917 0.925781C45.7783 1.769 45.4376 2.5622 45.1735 3.17716L43.1048 7.98285L42.1439 7.57178L44.2078 2.77722C44.2079 2.77713 44.208 2.77691 44.208 2.77681C44.208 2.77677 44.208 2.77685 44.208 2.77681Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M55.6741 11.8922L59.1247 6.65527L59.9987 7.22755L56.548 12.4645L55.6741 11.8922Z"
            fill={color}
          />
          <path
            d="M51.1003 34.6251L50.1906 29.5154L45.3807 32.8093C44.379 33.4952 43.3438 34.204 42.2668 34.844C40.5855 35.8252 38.8322 36.6782 37.0219 37.3958C36.6618 37.5622 36.278 37.6719 35.8842 37.721C35.8068 37.721 35.7315 37.7315 35.6583 37.7315C35.3011 37.7199 34.9462 37.6689 34.6002 37.5793L26.7474 35.8051C25.7478 35.58 24.7105 35.3465 23.7151 35.0213C23.2341 34.8628 22.7594 34.6835 22.2993 34.5105C21.743 34.302 21.1679 34.0831 20.5949 33.9101C19.1979 33.4931 17.6838 33.3097 16.222 33.1325C15.8853 33.0908 15.5424 33.0491 15.1994 33.0032C15.2663 35.3944 15.3123 37.5709 14.9254 39.9893C14.6787 41.5278 14.2207 42.8266 13.9739 44.3673C13.9541 44.6596 13.9859 44.9532 14.068 45.2345C14.1351 45.4289 14.2443 45.6062 14.388 45.7536C15.9251 47.0816 18.4137 47.0045 20.5175 46.9149C27.7157 46.6244 34.8957 46.0393 42.0577 45.1595C44.0987 44.9093 46.1545 44.632 48.0847 43.9628C49.7807 43.3749 51.5081 42.295 51.849 40.6522C51.987 39.9997 51.8908 39.3263 51.7863 38.6675C51.5771 37.3187 51.3387 35.9719 51.1003 34.6251Z"
            fill={color}
          />
          <path
            d="M20.9002 32.9114C21.5109 33.0949 22.1027 33.3284 22.6778 33.5369C23.1253 33.7078 23.5875 33.8829 24.0455 34.031C24.997 34.3416 26.0071 34.5709 26.9858 34.7919L34.8365 36.5639C35.1486 36.6519 35.4721 36.6927 35.7964 36.6849C36.0862 36.6426 36.3681 36.5576 36.6329 36.4326C38.3946 35.7348 40.1011 34.9054 41.7377 33.9517C42.7833 33.3263 43.808 32.6279 44.7951 31.9524L50.1383 28.2895C50.6842 27.9142 51.6127 27.4056 52.6876 26.8156C54.1076 26.0379 55.8245 25.0998 56.7363 24.3951C55.6112 23.7009 53.3777 23.4737 51.5374 23.286C50.3516 23.1651 49.237 23.0525 48.413 22.8316C46.1816 22.2332 43.8478 21.8184 41.5913 21.416L33.2513 19.9316C33.1865 19.9191 33.015 19.9066 32.8769 19.8983C32.6574 19.8816 32.4984 19.8691 32.3729 19.8503C31.9547 20.0046 30.5138 20.7405 29.945 21.0282L29.5372 21.2367C28.456 21.7788 27.5003 22.0706 26.1786 22.4876C24.974 22.8587 23.4746 23.3215 21.3289 24.1554C18.0038 25.4396 14.3922 27.466 11.7551 28.9504C10.1761 29.8343 8.92974 30.5348 8.24381 30.7933L7.89038 30.9267L8.43411 30.9809C10.1051 31.1241 11.7667 31.36 13.4113 31.6877C14.3712 31.8753 15.3771 31.9983 16.3391 32.1046C17.8616 32.2797 19.4175 32.4695 20.9002 32.9114Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_1106_3127">
            <rect
              width="60"
              height="46.4789"
              fill={color}
              transform="translate(0 0.47876)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default Logo;
