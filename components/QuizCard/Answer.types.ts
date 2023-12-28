export type Answer = {
  label: string;
  value: string;
};

export type AnswerProps = Answer & {
  selected: boolean;
  onClick: (value: string) => void;
};
