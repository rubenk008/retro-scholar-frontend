import { LinkProps } from "next/link";

interface SocialLinks extends LinkProps {
  icon?: React.ReactNode;
}

interface PageLinks extends LinkProps {
  name: string;
}

export default interface Props {
  links: Array<PageLinks>;
  socialLinks: Array<SocialLinks>;
}
