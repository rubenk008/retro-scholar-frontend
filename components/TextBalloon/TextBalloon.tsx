import React from "react";
import styled from "styled-components";
import { TextBalloonProps } from "./TextBalloon.types";

const Wrapper = styled.div`
  position: absolute;
  width: 34.4rem;
  margin-left: -1rem;
  padding: 1.8rem 2.4rem;

  @media screen and (min-width: 768px) {
    margin: auto;
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
    clip-path: polygon(69% 2%, 100% 0, 100% 100%, 28% 99%, 0 100%, 0% 0%);
    z-index: 1;
  }

  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 1rem;
    top: -2rem;
    border-left: 3rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 3rem solid var(--blue-pigment);

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
  left: 1rem;
  top: -0.85rem;

  @media screen and (min-width: 768px) {
    left: 1.05rem;
    top: -1rem;
  }

  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    left: 0.5rem;
    top: -1.8rem;
    border-left: 3rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-bottom: 3rem solid var(--bay-of-many);

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
  width: 1.1rem;
  transform: scaleX(1);
`;

const BackdropBottomEdge = styled.div`
  position: absolute;
  bottom: -0.9rem;
  right: -0.05rem;
  width: 0px;
  height: 0px;
  border-top: 0rem solid transparent;
  border-bottom: 1.1rem solid transparent;
  border-left: 1.1rem solid ${(props) => props.color};
  transform-origin: right center;

  @media screen and (min-width: 768px) {
    bottom: -1.05rem;
    right: 0rem;
  }
`;

const BackdropTopEdge = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  background: ${(props) => props.color};
  transform-origin: 0px 100%;
  height: 1.2rem;
  clip-path: polygon(67% 10%, 100% 0, 100% 90%, 60% 100%, 0 100%, 0% 0%);

  @media screen and (min-width: 768px) {
    height: 2rem;
    clip-path: polygon(67% 30%, 100% 0, 100% 90%, 60% 100%, 0 100%, 0% 0%);
  }
`;

const BackdropLeftEdge = styled.div`
  position: absolute;
  top: -0.01rem;
  left: -1.07rem;
  width: 0px;
  height: 0px;
  border-left: 1.1rem solid transparent;
  border-right: 0rem solid transparent;
  border-bottom: 1.1rem solid ${(props) => props.color};
  transform-origin: center top;

  @media screen and (min-width: 768px) {
    top: 0;
    left: -1.05rem;
  }
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
