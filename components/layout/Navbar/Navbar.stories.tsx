import React from "react";
import StyledNavbar from "./index";

export default {
  title: "Layout/Navbar",
  component: StyledNavbar,
};

const footerTempData = {
  links: [
    { name: "retro tech", href: "https://www.google.com" },
    { name: "renowned people", href: "https://www.google.com" },
    { name: "architecture", href: "https://www.google.com" },
    { name: "quizes", href: "https://www.google.com" },
  ],
};

export const Navbar = () => <StyledNavbar links={footerTempData.links} />;
