import React, { useContext, useEffect } from "react";

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
  transition: background-color 0.25s linear;
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

  return (
    <Container>
      <Topbar navDrawerData={menu} />
      <Main variant={theme}>{children}</Main>
      <Footer links={footerData.links} socialLinks={footerData.socialLinks} />
    </Container>
  );
};

export default PageWrapper;
