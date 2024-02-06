import { ComponentProps } from "react";
import { motion } from "framer-motion";
import { MediaProps } from "../Media/Media.types";

type Answer = {
  value: string;
  label: string;
};
export default interface QuizCardProps {
  media?: MediaProps;
  question: string;
  answers: Answer[];
  correctAnswer: string;
  onAnswered: (isCorrect: boolean) => void;
  explanation: string;
  nextQuestion: () => void;
}
