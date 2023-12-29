import styled from "styled-components";
import Answer from "./Answer";
import { AnswerGroupProps } from "./AnswerGroup.types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 768px) {
    gap: 1.6rem;
  }
`;

const AnswerGroup = ({
  answers,
  onAnswerSelected,
  selectedAnswer,
}: AnswerGroupProps) => {
  return (
    <Container>
      {answers.map((answer) => (
        <Answer
          key={answer.value}
          label={answer.label}
          value={answer.value}
          selected={selectedAnswer === answer.value}
          notSelected={selectedAnswer !== answer.value && selectedAnswer !== ""}
          onClick={onAnswerSelected}
        />
      ))}
    </Container>
  );
};

export default AnswerGroup;
