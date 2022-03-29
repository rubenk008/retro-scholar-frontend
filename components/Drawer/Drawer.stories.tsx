import React from "react";
import StyledDrawer from "./index";

export default {
  title: "Drawer",
  component: StyledDrawer,
};

const drawerTempData = {
  heading: "topics",
  links: [
    {
      name: "Retro tech",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
    },
    {
      name: "Renowed People",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
    },
    {
      name: "Architecture",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
    },
    {
      name: "Cities",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
    },
    {
      name: "Music",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
    },
  ],
};

export const Drawer = () => (
  <StyledDrawer heading={drawerTempData.heading} links={drawerTempData.links} />
);
