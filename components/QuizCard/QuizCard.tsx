import { motion } from "framer-motion";

import styled from "styled-components";
import QuizCardProps from "./QuizCard.types";
import { useState } from "react";
import isMobile from "../../utils/isMobile";
import Typography from "../Typography";
import AnswerGroup from "./AnswerGroup";
import Media from "../Media";
import Button from "../Button";

const CardWrapper = styled(motion.div)`
  perspective: 1800px;
  transformstyle: preserve-3d;
  position: relative;
  height: calc((520 / 414) * 100vw);
  width: calc((336 / 414) * 100vw);

  @media (min-width: 769px) {
    height: calc((495 / 1440) * 100vw);
    width: calc((900 / 1440) * 100vw);
  }
`;

const CardFront = styled(motion.div)`
  border: none;
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  background: var(--slight-titan-white);
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CardBack = styled(motion.div)`
  border: none;
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  background: var(--tutu);
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MediaSection = styled.div`
  padding: 0.5rem;
  flex-grow: 1;
  height: 100%;
`;

const QuestionSection = styled.div`
  padding: 2rem 2rem 2.3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 769px) {
    padding: 5.2rem 5.2rem 4.3rem;
    width: 48rem;
    gap: 3.2rem;
  }
`;

const AnswerStateSection = styled.div`
  padding: 6.8rem 4rem 2.8rem;

  @media (min-width: 769px) {
    flex-grow: 1;
    height: 100%;
    padding: 7rem 5.2rem 0 5.2rem;
  }
`;

const ExplanationSection = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 4rem 4rem;

  @media (min-width: 769px) {
    padding: 7rem 5.2rem 5.2rem 0;
    width: 40rem;
    gap: 3.2rem;
  }
`;

const spring = {
  type: "spring",
  stiffness: 200,
  damping: 50,
};

const QuizCard = ({
  media,
  question,
  answers,
  correctAnswer,
  explanation,
  onAnswered,
}: QuizCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const mobile = isMobile();

  const handleAnswerClick = (value: string) => {
    setSelectedAnswer(value);

    onAnswered(value === correctAnswer);

    setTimeout(() => {
      setIsFlipped((prevState) => !prevState);
    }, 150);
  };

  return (
    <CardWrapper>
      <CardFront
        animate={
          mobile
            ? {
                rotateY: isFlipped ? -180 : 0,
                x: isFlipped ? "-50%" : 0,
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0)"
                  : "0px 8px 27px 4px rgba(9,25,189,0.2)",
              }
            : {
                rotateX: isFlipped ? -180 : 0,
                y: isFlipped ? "-100%" : 0,
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0)"
                  : "0px 8px 27px 4px rgba(9,25,189,0.2)",
              }
        }
        transition={spring}
        style={{ zIndex: isFlipped ? 0 : 1 }}
      >
        <MediaSection>
          <Media {...media} />
        </MediaSection>
        <QuestionSection>
          <Typography variant="h5Alt" component="h2" color="secondary">
            {question}
          </Typography>
          <AnswerGroup
            answers={answers}
            onAnswerSelected={handleAnswerClick}
            selectedAnswer={selectedAnswer}
          />
        </QuestionSection>
      </CardFront>
      <CardBack
        initial={
          mobile ? { rotateY: 180, x: "-50%" } : { rotateX: 180, y: "-100%" }
        }
        animate={
          mobile
            ? {
                rotateY: isFlipped ? 0 : 180,
                x: isFlipped ? 0 : "-50%",
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0.2)"
                  : "0px 8px 27px 4px rgba(9,25,189,0)",
              }
            : {
                rotateX: isFlipped ? 0 : 180,
                y: isFlipped ? 0 : "-100%",
                boxShadow: isFlipped
                  ? "0px 8px 27px 4px rgba(9,25,189,0.2)"
                  : "0px 8px 27px 4px rgba(9,25,189,0)",
              }
        }
        transition={spring}
        style={{
          zIndex: isFlipped ? 1 : 0,
        }}
      >
        <AnswerStateSection>
          <Typography variant="h0" component="h3">
            Nice one!
          </Typography>
          <Typography variant="h5Alt" component="h3">
            That’s the correct answer.
          </Typography>
        </AnswerStateSection>
        <ExplanationSection>
          <Typography variant="body1alt" component="p">
            {explanation}
          </Typography>
          <Button>Next question</Button>
        </ExplanationSection>
      </CardBack>
    </CardWrapper>
  );
};

export default QuizCard;
