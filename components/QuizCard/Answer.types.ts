export type Answer = {
  label: string;
  value: string;
};

export type AnswerProps = Answer & {
  selected: boolean;
  notSelected: boolean;
  onClick: (value: string) => void;
};
