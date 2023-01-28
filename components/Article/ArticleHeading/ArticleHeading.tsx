import React from "react";
import styled, { css } from "styled-components";

import { variant } from "styled-system";

import Typography from "../../Typography";

interface Props {
  variant: string;
  children?: React.ReactNode;
}

const ArticleHeadingRoot = styled("div")<Props>(
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
  }),
  css`
    position: absolute;
    z-index: 2;
    background: var(--white);

    &:before {
      content: " ";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      left: 10px;
      top: -10px;
      border-left: 10px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid var(--white);

      @media screen and (min-width: 768px) {
        left: 20px;
      }
    }
  `
);

const CustomTypography = styled(Typography)`
  font-size: ${(props: { size: string }) =>
    props.size === "small" ? "16px" : "24px"};
  line-height: ${(props: { size: string }) =>
    props.size === "small" ? "14px" : "auto"};
  letter-spacing: 1%;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 24px;
  }
`;

const ArticleHeading = ({ variant = "regular", children }: Props) => {
  return (
    <ArticleHeadingRoot variant={variant}>
      <CustomTypography
        variant="h3"
        color="secondary"
        size={variant === "small" ? "small" : "regular"}
      >
        {children}
      </CustomTypography>
    </ArticleHeadingRoot>
  );
};

export default ArticleHeading;
