import React from "react";
import FooterStyled from "./index";

export default {
  title: "Footer",
  component: FooterStyled,
};

const footerTempData = {
  links: [],
  socialLinks: [],
};

export const Footer = () => (
  <FooterStyled
    links={footerTempData.links}
    socialLinks={footerTempData.socialLinks}
  />
);
