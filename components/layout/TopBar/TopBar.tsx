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
import { useWindowSize } from "../../../hooks/useWindowSize";
import isMobile from "../../../utils/isMobile";

const Nav = styled(motion.div)`
  width: 100%;
  height: var(--app-height);
  position: absolute;
  display: block;
  margin: 0;
  z-index: 9999999;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    left: -50%;
    transform: translateX(50%);
    height: auto;
    position: fixed;
  }
`;

const Container = styled.div`
  max-width: 118rem;
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

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: row;
  position: fixed;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
  }
`;

const NavBar = styled(motion.div)`
  position: fixed;
  bottom: 0;
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
    right: 0;
    transform: translateX(0%);
    position: relative;
    padding: 0;
    position: absolute;
  }
`;

const StyledLogo = styled(LogoWithName)`
  cursor: pointer;
  transform: rotate(-2deg);
  pointer-events: auto;
  margin: 1.6rem 0 0 2rem;

  @media screen and (min-width: 768px) {
    margin: 0;
    transform: rotate(-2deg) translateX(-1.5rem);
  }
`;

const Navbar = ({ navDrawerData }: Props) => {
  const [drawerState, setDrawerState] = useState("closed");
  const [logoZIndex, setLogoZIndex] = useState(2);

  const [scrollYprev, setScrollYprev] = useState(0);
  const [hidden, setHidden] = useState(false);

  const [isMobileView, setIsMobileView] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

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

  const logoAnimations = !isMobileView
    ? {
        visible: { transform: "translate(0%, 0rem)" },
        hidden: { transform: "translate(0%, -12rem)" },
      }
    : {
        visible: { transform: "translate(0%, 0rem)" },
        hidden: { transform: "translate(0%, -12rem)" },
      };

  const floatingNavbarAnimations = !isMobileView
    ? {
        visible: { transform: "translateY(0rem)" },
        hidden: { transform: "translateY(-12rem)" },
      }
    : {
        visible: { transform: "translateY(0rem)" },
        hidden: { transform: "translateY(12rem)" },
      };

  return (
    <Nav>
      <Container>
        <Logo
          style={{ zIndex: logoZIndex }}
          variants={logoAnimations}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        >
          <Link href="/" scroll={false}>
            <StyledLogo height={pxToRem(79.38)} width={pxToRem(61.37)} />
          </Link>
        </Logo>
        <NavBar
          initial="visible"
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
