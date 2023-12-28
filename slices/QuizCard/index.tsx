import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `QuizCard`.
 */
export type QuizCardProps = SliceComponentProps<Content.QuizCardSlice>;

/**
 * Component for "QuizCard" Slices.
 */
const QuizCard = ({ slice }: QuizCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for quiz_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default QuizCard;
