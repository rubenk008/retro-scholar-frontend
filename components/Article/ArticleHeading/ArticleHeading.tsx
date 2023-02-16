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
        padding: ["16px 20px", "1.6rem 2rem"],
        width: ["calc(100% - 40px)", "calc(100% - 4rem)"],
        bottom: ["20px", "2rem"],
        left: ["20px", "2rem"],
        right: ["20px", "2rem"],
      },
      small: {
        padding: ["8px 8px", "1.6rem 1.6rem"],
        width: ["calc(100% - 24px)", "calc(100% - 4rem)"],
        bottom: ["12px", "2rem"],
        left: ["12px", "2rem"],
        right: ["12px", "2rem"],
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
        left: 2rem;
        top: -1.1rem;
        border-left: 1.2rem solid transparent;
        border-right: 0.7rem solid transparent;
        border-bottom: 1.2rem solid var(--white);
      }
    }
  `
);

const CustomTypography = styled(Typography)`
  font-size: ${(props: { size: string }) =>
    props.size === "small" ? "16px" : "2.4rem"};
  line-height: ${(props: { size: string }) =>
    props.size === "small" ? "14px" : "auto"};
  letter-spacing: 1%;

  @media screen and (min-width: 768px) {
    font-size: 2.6rem;
    line-height: 2.4rem;
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
