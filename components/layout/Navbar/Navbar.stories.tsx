import React from "react";
import StyledNavbar from "./index";

export default {
  title: "Layout/Navbar",
  component: StyledNavbar,
};

const footerTempData = {
  links: [
    { name: "topics", onClick: () => {} },
    { name: "quizes", onClick: () => {} },
  ],
};

export const Navbar = () => <StyledNavbar links={footerTempData.links} />;
