import React, { useEffect, useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Drawer from "../Drawer";

import InstagramIcon from "../../icons/Instagram";
import FacebookIcon from "../../icons/Facebook";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
  -webkit-user-select: none;
`;

const Main = styled.main`
  background: var(--bay-of-many);
`;

const PageWrapper = ({ children, menu }) => {
  const [drawerState, setDrawerState] = useState("closed");

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", appHeight);
    appHeight();

    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  const onButtonClick = () => {
    if (drawerState === "closed") {
      setDrawerState("open");
    }
  };

  const links = [
    {
      name: "topics",
      onClick: () => {
        onButtonClick();
      },
    },
    // {
    //   name: "quizes",
    //   onClick: () => {
    //     onButtonClick();
    //   },
    // },
  ];

  const footerData = {
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

  const drawerTempData = {
    socialLinks: [
      {
        icon: <InstagramIcon />,
        href: "",
      },
      { icon: <FacebookIcon />, href: "" },
    ],
  };

  return (
    <Container>
      <Navbar links={links} />
      <Main>{children}</Main>
      <Footer links={footerData.links} socialLinks={footerData.socialLinks} />
      <Drawer
        state={drawerState}
        setState={setDrawerState}
        heading={menu.title}
        links={menu.links}
        socialLinks={drawerTempData.socialLinks}
      />
    </Container>
  );
};

export default PageWrapper;
