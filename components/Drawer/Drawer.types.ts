import { LinkProps } from "next/link";

interface PageLinks extends LinkProps {
  name: string;
  desc?: string;
}

export default interface Props {
  heading: string;
  links: Array<PageLinks>;
}
