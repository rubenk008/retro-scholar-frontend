import React from "react";
import styled from "styled-components";
import { TextBalloonProps } from "./TextBalloon.types";

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 34.4rem;
  padding: 1.8rem 2.4rem;
  margin: 1rem;

  @media screen and (min-width: 768px) {
    margin: 20rem;
    padding: 3rem 3rem;
    width: 46.9rem;
  }

  &:before {
    content: " ";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--blue-pigment);
    clip-path: polygon(69% 2%, 100% 0, 100% 100%, 28% 98%, 0 100%, 0% 0%);
    z-index: 1;
  }

  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
    top: -10px;
    border-left: 10px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid var(--blue-pigment);

    @media screen and (min-width: 768px) {
      left: 2rem;
      top: -2.3rem;
      border-left: 3.5rem solid transparent;
      border-right: 2.3rem solid transparent;
      border-bottom: 3.5rem solid var(--blue-pigment);
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 1;
  position: absolute;
  left: 1.05rem;
  top: -1rem;

  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
    top: -10px;
    border-left: 10px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid var(--bay-of-many);

    @media screen and (min-width: 768px) {
      left: 1.5rem;
      top: -2rem;
      border-left: 3.5rem solid transparent;
      border-right: 2.3rem solid transparent;
      border-bottom: 3.5rem solid var(--bay-of-many);
    }
  }
`;

const BackdropRightEdge = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: ${(props) => props.color};
  transform-origin: 100% 0px;
  width: 0.8rem;
  transform: scaleX(1);
`;

const BackdropBottomEdge = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 0px;
  height: 0px;
  border-top: 0.8rem solid transparent;
  border-bottom: 0.8rem solid transparent;
  border-left: 0.8rem solid ${(props) => props.color};
  transform-origin: right center;
`;

const BackdropTopEdge = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: ${(props) => props.color};
  transform-origin: 0px 100%;
  height: 2rem;
  clip-path: polygon(67% 40%, 100% 0, 100% 99%, 60% 100%, 0 100%, 0% 0%);
`;

const BackdropLeftEdge = styled.div`
  position: absolute;
  top: 0px;
  left: -1.1rem;
  width: 0px;
  height: 0px;
  border-left: 1.2rem solid transparent;
  border-right: 0rem solid transparent;
  border-bottom: 1.2rem solid ${(props) => props.color};
  transform-origin: center top;
`;

const TextBalloon = ({ children }: TextBalloonProps) => {
  return (
    <Wrapper>
      {/* <Elevated /> */}
      <Backdrop>
        <BackdropLeftEdge color={"var(--bay-of-many)"} />
        <BackdropTopEdge color={"var(--bay-of-many)"} />
        <BackdropRightEdge color={"var(--bay-of-many)"} />
        <BackdropBottomEdge color={"var(--bay-of-many)"} />
      </Backdrop>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default TextBalloon;
