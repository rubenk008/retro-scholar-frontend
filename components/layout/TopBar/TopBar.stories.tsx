import React from "react";
import StyledNavbar from "./index";

export default {
  title: "Layout/Navbar",
  component: StyledNavbar,
};

const drawerTempData = {
  heading: "topics",
  links: [
    {
      name: "Retro tech",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
      opacity: 1,
      active: false,
    },
    {
      name: "Iconic Figures",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
      opacity: 1,
      active: false,
    },
    {
      name: "Architecture",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
      opacity: 1,
      active: false,
    },
  ],
};

export const Navbar = () => <StyledNavbar navDrawerData={drawerTempData} />;
