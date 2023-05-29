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
import { useIsMedium } from "../../../hooks/useMediaQuery";

const Nav = styled(motion.div)`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: -50%;
  transform: translateX(50%);
  margin: 0;
  z-index: 9999999;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  max-width: 118rem;
  padding: 16px 24px 0px 20px;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin-top: 2.6rem;
    flex-direction: row;
  }
`;

const Column = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: relative;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

const NavBar = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  pointer-events: auto;
  z-index: 2;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0 3.2rem 3rem;

  @media screen and (min-width: 768px) {
    width: auto;
    left: auto;
    bottom: auto;
    transform: translateX(0%);
    position: relative;
    padding: 0;
  }
`;

const StyledLogo = styled(LogoWithName)`
  cursor: pointer;
  transform: rotate(-2deg);
  pointer-events: auto;

  @media screen and (min-width: 768px) {
    transform: rotate(-2deg) translateX(-1.5rem);
  }
`;

const Navbar = ({ navDrawerData }: Props) => {
  const [drawerState, setDrawerState] = useState("closed");
  const [logoZIndex, setLogoZIndex] = useState(2);

  const [scrollYprev, setScrollYprev] = useState(0);
  const [hidden, setHidden] = useState(false);

  const isDesktop = useIsMedium();

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

  const desktopVariants = isDesktop
    ? {
        visible: { transform: "translate(0%, 0rem)" },
        hidden: { transform: "translate(0%, -12rem)" },
      }
    : {
        visible: { transform: "translate(0%, 0rem)" },
        hidden: { transform: "translate(0%, -12rem)" },
      };

  const floatingNavbarAnimations = isDesktop
    ? {
        visible: { transform: "translateY(0rem)" },
        hidden: { transform: "translateY(-12rem)" },
      }
    : {
        visible: { transform: "translate(-50%, 0rem)" },
        hidden: { transform: "translate(-50%, 12rem)" },
      };

  return (
    <Nav>
      <Container>
        <Column
          style={{ zIndex: logoZIndex }}
          variants={desktopVariants}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
          <Link href="/">
            <StyledLogo height={pxToRem(79.38)} width={pxToRem(61.37)} />
          </Link>
        </Column>
        <NavBar
          variants={floatingNavbarAnimations}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
          <FloatingNavBar onClick={onNavClick} state={drawerState} />
          <Drawer
            state={drawerState}
            setState={setDrawerState}
            heading={navDrawerData.heading}
            links={navDrawerData.links}
          />
        </NavBar>
      </Container>
      <Overlay
        onClick={onNavClick}
        isVisible={drawerState == "open" ? true : false}
      />
    </Nav>
  );
};

export default Navbar;
