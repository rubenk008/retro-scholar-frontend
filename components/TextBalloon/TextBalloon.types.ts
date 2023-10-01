export type TextBalloonProps = {
  children?: React.ReactNode;
  variant?: "blue" | "pink";
  arrowPositionDesktop?:
    | "top_left"
    | "bottom_left"
    | "top_right"
    | "bottom_right";
  arrowPositionMobile?: "top" | "bottom";
};
