import React from "react";
import FooterStyled from "./index";

import InstagramIcon from "../../icons/Instagram";
import FacebookIcon from "../../icons/Facebook";

export default {
  title: "Layout/Footer",
  component: FooterStyled,
};

const footerTempData = {
  links: [
    { name: "about us", href: "https://www.google.com" },
    { name: "privacy", href: "https://www.google.com" },
  ],
  socialLinks: [
    {
      icon: <InstagramIcon />,
      href: "",
    },
    { icon: <FacebookIcon />, href: "" },
  ],
};

export const Footer = () => (
  <FooterStyled
    links={footerTempData.links}
    socialLinks={footerTempData.socialLinks}
  />
);
