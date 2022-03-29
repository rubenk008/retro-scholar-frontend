import React from "react";
import StyledNavbar from "./index";

export default {
  title: "Layout/Navbar",
  component: StyledNavbar,
};

const footerTempData = {
  links: [
    { name: "topics", href: "https://www.google.com" },
    { name: "quizes", href: "https://www.google.com" },
  ],
};

export const Navbar = () => <StyledNavbar links={footerTempData.links} />;
