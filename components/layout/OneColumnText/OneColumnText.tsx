import React from "react";
import styled from "styled-components";

import OneColumnTextProps from "./OneColumnText.types";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 8rem 3.2rem 0;

  @media screen and (min-width: 1024px) {
    padding: 10rem 0 0;
    margin-left: 45.6rem;
    width: 51.6666666666667%;
  }
`;

const OneColumnMedia = ({ children }: OneColumnTextProps) => {
  return <Section>{children}</Section>;
};

export default OneColumnMedia;
