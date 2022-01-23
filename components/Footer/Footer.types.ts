import { LinkProps } from "next/link";

interface SocialLinks extends LinkProps {
  icon?: React.ReactNode;
}

export default interface Props {
  links: Array<LinkProps>;
  socialLinks: Array<SocialLinks>;
}
