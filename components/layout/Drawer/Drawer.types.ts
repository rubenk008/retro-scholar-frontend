import { LinkProps } from "next/link";

interface PageLinks extends LinkProps {
  name: string;
  desc?: string;
  opacity?: number;
  active?: boolean;
}

export default interface Props {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  heading: string;
  links: Array<PageLinks>;
}
