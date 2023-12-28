import { Answer } from "./Answer.types";

export type AnswerGroupProps = {
  answers: Answer[];
  onAnswerSelected: (answer: string) => void;
  selectedAnswer: string;
};
