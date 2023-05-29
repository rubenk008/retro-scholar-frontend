import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Link from "next/link";

import { motion, useScroll } from "framer-motion";

import Props from "./TopBar.types";

import LogoWithName from "../../icons/LogoWithName";
import FloatingNavBar from "../FloatingNavBar";
import Drawer from "../Drawer";
import Overlay from "../Overlay";
import pxToRem from "../../../utils/pxToRem";

const Nav = styled(motion.div)`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: -50%;
  transform: translateX(50%);
  margin: 0;
  z-index: 9999999;
`;

const Container = styled.div`
  max-width: 118rem;
  padding: 16px 24px 0px 20px;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin-top: 2.6rem;
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

const StyledLogo = styled(LogoWithName)`
  cursor: pointer;
  transform: rotate(-2deg);

  @media screen and (min-width: 768px) {
    transform: rotate(-2deg) translateX(-1.5rem);
  }
`;

const Navbar = ({ navDrawerData }: Props) => {
  const [drawerState, setDrawerState] = useState("closed");
  const [logoZIndex, setLogoZIndex] = useState(2);

  const [scrollYprev, setScrollYprev] = useState(0);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  const onNavClick = (event) => {
    if (drawerState === "closed") {
      setDrawerState("open");
      setLogoZIndex(0);
    } else {
      setDrawerState("closed");
      setTimeout(() => {
        setLogoZIndex(2);
      }, 700);
    }
  };

  function update(currentY) {
    if (currentY < scrollYprev) {
      setHidden(false);
    } else if (currentY > 100 && currentY > scrollYprev) {
      setHidden(true);
    }
  }

  useEffect(() => {
    return scrollY.on("change", (newValue) => {
      update(newValue);
      setScrollYprev(newValue);
    });
  });

  const variants = {
    visible: { transform: "translate(50%, 0rem)" },
    hidden: { transform: "translate(50%, -12rem)" },
  };

  return (
    <Nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <Container>
        <Column style={{ zIndex: logoZIndex }}>
          <Link href="/">
            <StyledLogo height={pxToRem(79.38)} width={pxToRem(61.37)} />
          </Link>
        </Column>
        <Column style={{ paddingTop: "2rem" }}>
          <FloatingNavBar onClick={onNavClick} state={drawerState} />
        </Column>
        <Drawer
          state={drawerState}
          setState={setDrawerState}
          heading={navDrawerData.heading}
          links={navDrawerData.links}
        />
      </Container>
      <Overlay
        onClick={onNavClick}
        isVisible={drawerState == "open" ? true : false}
      />
    </Nav>
  );
};

export default Navbar;
