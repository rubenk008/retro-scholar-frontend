import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Topbar from "../TopBar";
import Footer from "../Footer";

import InstagramIcon from "../../icons/Instagram";
import FacebookIcon from "../../icons/Facebook";
import styled from "styled-components";
import { MainContainerProps } from "./PageWrapper.types";
import { ThemeContext } from "../../../providers/ThemeProvider";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  -webkit-touch-callout: none; /* prevent callout to copy image, etc when tap to hold */
  -webkit-user-select: none;
`;

const Main = styled.main<MainContainerProps>`
  min-height: 100vh;
  background: ${(props) =>
    props.variant === "dark" ? "var(--bay-of-many)" : "var(--tutu)"};
`;

const PageWrapper = ({ menu, children }) => {
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

  const footerData = {
    links: [
      { name: "about us", href: "" },
      { name: "privacy", href: "" },
    ],
    socialLinks: [
      {
        icon: <InstagramIcon />,
        href: "https://www.instagram.com/retroscholar/",
      },
      {
        icon: <FacebookIcon />,
        href: "https://www.facebook.com/retroscholar/",
      },
    ],
  };

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Container>
      <Topbar navDrawerData={menu} />
      <Main variant={theme}>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      </Main>
      <Footer links={footerData.links} socialLinks={footerData.socialLinks} />
    </Container>
  );
};

export default PageWrapper;
