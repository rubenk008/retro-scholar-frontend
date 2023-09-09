import React from "react";
import FloatingNavBar from "./index";

export default {
  title: "Layout/FloatingNavBar",
  component: FloatingNavBar,
};

const footerTempData = {
  links: [
    { name: "topics", onClick: () => {} },
    { name: "quizes", onClick: () => {} },
  ],
};

export const Floating = () => <FloatingNavBar />;
