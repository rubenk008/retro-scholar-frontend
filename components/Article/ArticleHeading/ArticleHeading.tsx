import React from "react";
import styled from "styled-components";

import { variant } from "styled-system";

import Typography from "../../Typography";

interface Props {
  variant: string;
  children?: React.ReactNode;
}

const ArticleHeadingRoot = styled("div")<Props>(
  {
    background: "var(--white)",
    position: "absolute",

    "&::before": {
      content: " ",
      width: 0,
      height: 0,
      position: "absolute",
      left: "20px",
      top: "-10px",
      borderLeft: "10px solid transparent",
      borderRight: "5px solid transparent",
      borderNottom: "10px solid var(--white)",
    },
  },
  variant({
    variants: {
      regular: {
        padding: "16px 20px",
        width: "calc(100% - 40px)",
        bottom: "20px",
        left: "20px",
        right: "20px",
      },
      small: {
        padding: ["8px 8px", "16px 16px"],
        width: ["calc(100% - 24px)", "calc(100% - 40px)"],
        bottom: ["12px", "20px"],
        left: ["12px", "20px"],
        right: ["12px", "20px"],
      },
    },
  })
);

const CustomTypography = styled(Typography)`
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 1%;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 24px;
  }
`;

const ArticleHeading = ({ variant = "regular", children }: Props) => {
  return (
    <ArticleHeadingRoot variant={variant}>
      <CustomTypography variant="h3" color="secondary">
        {children}
      </CustomTypography>
    </ArticleHeadingRoot>
  );
};

export default ArticleHeading;
