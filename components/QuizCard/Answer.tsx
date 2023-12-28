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

  @media (min-width: 768px) {
    height: 6.4rem;
  }

  &:before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background: var(--white);
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

const Answer = ({ label, selected, value, onClick }: AnswerProps) => {
  return (
    <Container onClick={() => onClick(value)}>
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
