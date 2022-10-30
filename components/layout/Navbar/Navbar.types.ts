interface PageLinks {
  name: string;
  onClick: () => void;
}

export default interface Props {
  links: Array<PageLinks>;
  theme?: string;
}
