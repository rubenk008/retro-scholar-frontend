import React, { useState } from "react";
import StyledDrawer from "./index";
import Button from "../../Button";

import InstagramIcon from "../../icons/Instagram";
import FacebookIcon from "../../icons/Facebook";

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
      name: "Renowed People",
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
    {
      name: "Cities",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
      opacity: 1,
      active: false,
    },
    {
      name: "Music",
      desc: "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna.",
      href: "https://www.google.com",
      opacity: 1,
      active: false,
    },
  ],
  socialLinks: [
    {
      icon: <InstagramIcon />,
      href: "",
    },
    { icon: <FacebookIcon />, href: "" },
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
        socialLinks={drawerTempData.socialLinks}
      />
    </>
  );
};
