import React from "react";
import styled from "styled-components";

const Spacer = styled.div`
  width: 100%;
  height: 8rem;

  @media screen and (min-width: 1024px) {
    height: 10rem;
  }
`;

const ArticleSpacer = () => <Spacer></Spacer>;

export default ArticleSpacer;
