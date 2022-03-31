import { LinkProps } from "next/link";

interface SocialLinks extends LinkProps {
  icon?: React.ReactNode;
}

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
  socialLinks: Array<SocialLinks>;
}
