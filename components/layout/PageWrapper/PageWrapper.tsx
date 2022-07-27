import React, { useState } from "react";

import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";

import InstagramIcon from "../../icons/Instagram";
import FacebookIcon from "../../icons/Facebook";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Main = styled.main`
  background: var(--bay-of-many);
`;

const PageWrapper = ({ children }) => {
  const [drawerState, setDrawerState] = useState("open");

  const links = [
    { name: "topics", href: "https://www.google.com" },
    { name: "quizes", href: "https://www.google.com" },
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

  const onButtonClick = () => {
    if (drawerState === "closed") {
      setDrawerState("open");
    }
  };

  return (
    <Container>
      <Navbar links={links} />
      <Main>{children}</Main>
      <Footer links={footerData.links} socialLinks={footerData.socialLinks} />
    </Container>
  );
};

export default PageWrapper;
