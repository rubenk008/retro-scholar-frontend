import styled from "styled-components";
import { AnswerProps } from "./Answer.types";
import Typography from "../Typography";

const Container = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4.4rem;
  width: 100%;

  @media (min-width: 768px) {
    height: 6.4rem;
  }

  &:before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid;
    margin-right: 1rem;
  }
`;

const Answer = ({ label, selected, value, onClick }: AnswerProps) => {
  return (
    <Container onClick={() => onClick(value)}>
      <Typography variant="body1" component="span">
        {value}
      </Typography>
      <Typography variant="body1" color={selected ? "primary" : "text"}>
        {label}
      </Typography>
    </Container>
  );
};

export default Answer;
