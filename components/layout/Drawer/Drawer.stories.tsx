import React, { useState } from "react";
import StyledDrawer from "./index";
import Button from "../../Button";

export default {
  title: "Layout/Drawer",
  component: StyledDrawer,
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

export const Drawer = () => {
  const [drawerState, setDrawerState] = useState("open");

  const onButtonClick = () => {
    if (drawerState === "closed") {
      setDrawerState("open");
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
        }}
      >
        <Button onClick={onButtonClick}>OPEN</Button>
      </div>

      <StyledDrawer
        state={drawerState}
        setState={setDrawerState}
        heading={drawerTempData.heading}
        links={drawerTempData.links}
      />
    </>
  );
};
