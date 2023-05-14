import React from "react";
import styled from "styled-components";

import OneColumnTextProps from "./OneColumnText.types";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 3.2rem;

  @media screen and (min-width: 1024px) {
    padding: 0;
    margin-left: 45.6rem;
    width: 51.6666666666667%;
    height: 100%;
  }
`;

const OneColumnMedia = ({ children }: OneColumnTextProps) => {
  return <Section>{children}</Section>;
};

export default OneColumnMedia;
