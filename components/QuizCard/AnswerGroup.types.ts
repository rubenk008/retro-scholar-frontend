import { AnswerProps } from "./Answer.types";

export type AnswerGroupProps = {
  answers: AnswerProps[];
  onAnswerSelected: (answer: string) => void;
  selectedAnswer: string;
};
