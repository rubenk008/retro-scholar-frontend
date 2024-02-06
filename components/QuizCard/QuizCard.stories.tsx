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
      answers={[
        { label: "Waar", value: "A" },
        { label: "Niet waar", value: "B" },
        { label: "Waar", value: "C" },
        { label: "Niet waar", value: "D" },
      ]}
      correctAnswer="A"
      media={{
        type: "image",
        image: {
          url: "https://www.retroscholar.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fretro-scholar%2F9f4c2431-70fc-4025-90ec-e4ee4f8ff262_Bubble_palace_cover_halftone.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C113%2C866%2C361%26w%3D1440%26h%3D600&w=3840&q=75",
          alt: "testing image",
        },
      }}
      explanation="Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna. Integer ut auctor diam, quis posuere ipsum. Nam ut augue eu mauris feugiat scelerisque sit amet in velit."
      onAnswered={(isCorrect) => console.log("answered", isCorrect)}
      nextQuestion={() => console.log("next question")}
    />
  </div>
);
