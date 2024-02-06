import React, { useState, useEffect } from "react";
import QuizScoreCounter from "./index";

export default {
  title: "Components/QuizScoreCounter",
  component: QuizScoreCounter,
};

export const Basic = () => {
  const [oldScore, setOldScore] = useState(0);
  const [newScore, setNewScore] = useState(0);

  const updateScore = () => {
    setOldScore(newScore);
    setNewScore(newScore + 100);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--bay-of-many)",
      }}
      onClick={() => {
        updateScore();
      }}
    >
      <QuizScoreCounter oldScore={oldScore} newScore={newScore} />
    </div>
  );
};
