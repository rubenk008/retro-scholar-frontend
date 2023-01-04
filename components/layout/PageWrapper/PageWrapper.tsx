import React, { useContext, useEffect, useState } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Drawer from "../Drawer";

import InstagramIcon from "../../icons/Instagram";
import FacebookIcon from "../../icons/Facebook";
import styled from "styled-components";
import { MainContainerProps } from "./PageWrapper.types";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Container = styled.div`
  position: relative;
  -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
  -webkit-user-select: none;
`;

const Main = styled.main<MainContainerProps>`
  background: ${(props) =>
    props.variant === "dark" ? "var(--bay-of-many)" : "var(--tutu)"};
`;

const PageWrapper = ({ menu, children }) => {
  const [drawerState, setDrawerState] = useState("closed");

  const { theme } = useContext(ThemeContext);

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
      <Navbar links={links} theme={theme} />
      <Main variant={theme}>{children}</Main>
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
