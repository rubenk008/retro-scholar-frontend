import { LinkProps } from "next/link";

interface PageLinks extends LinkProps {
  name: string;
}

export default interface Props {
  links: Array<PageLinks>;
  theme?: string;
}
