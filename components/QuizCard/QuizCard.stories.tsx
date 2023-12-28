import React from "react";
import QuizCard from "./index";

export default {
  title: "Components/QuizCard",
  component: QuizCard,
};

export const Basic = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "var(--bay-of-many)",
    }}
  >
    <QuizCard
      question="Een giraffe heeft 2 keer zoveel
nekwervels als een mens."
    />
  </div>
);
