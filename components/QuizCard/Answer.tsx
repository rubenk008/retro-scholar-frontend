import styled from "styled-components";
import { AnswerProps } from "./Answer.types";
import Typography from "../Typography";

const Container = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4.4rem;
  width: 100%;
  background: none;
  border: none;
  position: relative;
  padding: 0;
  background: var(--white);
  clip-path: polygon(80% 2%, 100% 0, 100% 100%, 28% 99%, 0 100%, 0% 0%);
  transition: all 0.2s ease-in-out;

  @media (min-width: 768px) {
    height: 6.4rem;
  }

  &.selected {
    background: var(--bay-of-many);
  }

  &.notSelected {
    opacity: 0.6;
  }

  &:before {
    position: absolute;
    content: "";
    display: inline-block;
    width: calc(100% - 0.4rem);
    height: calc(100% - 0.4rem);
    top: 0.2rem;
    left: 0.2rem;
    background: var(--white);
    clip-path: polygon(80% 2%, 100% 0, 100% 100%, 28% 99%, 0 100%, 0% 0%);
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  gap: 0.6rem;
  z-index: 2;
  padding: 0 2rem;

  @media (min-width: 768px) {
    gap: 0.8rem;
    padding: 0 2.4rem;
  }
`;

const Answer = ({
  label,
  selected,
  notSelected,
  value,
  onClick,
}: AnswerProps) => {
  return (
    <Container
      onClick={() => onClick(value)}
      className={`${selected ? "selected" : ""} ${
        notSelected ? "notSelected" : ""
      }`}
    >
      <Content>
        <Typography variant="body4Bold" component="span" color="secondary">
          {value}.
        </Typography>
        <Typography variant="body4" color="secondary">
          {label}
        </Typography>
      </Content>
    </Container>
  );
};

export default Answer;
