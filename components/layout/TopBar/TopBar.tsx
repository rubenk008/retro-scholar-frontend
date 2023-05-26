import React, { useState } from "react";
import styled from "styled-components";

import Link from "next/link";

import Props from "./TopBar.types";

import LogoWithName from "../../icons/LogoWithName";
import FloatingNavBar from "../FloatingNavBar/FloatingNavBar";
import Drawer from "../Drawer/Drawer";

const Nav = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: -50%;
  transform: translateX(50%);
  margin: 0;
  z-index: 9999999;

  @media screen and (min-width: 768px) {
    height: 12.8rem;
    padding-top: 2.6rem;
  }
`;

const Container = styled.div`
  max-width: 118rem;
  padding: 16px 24px 0px 20px;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0px 5.2rem 0;
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
  transform: rotate(-2deg) scale(0.7);

  @media screen and (min-width: 768px) {
    transform: rotate(-2deg) scale(1);
  }
`;

const Navbar = ({ navDrawerData, theme = "dark" }: Props) => {
  const [drawerState, setDrawerState] = useState("closed");

  const onNavClick = (event) => {
    if (drawerState === "closed") {
      setDrawerState("open");
    } else {
      setDrawerState("closed");
    }
  };

  return (
    <Nav>
      <Container>
        <Column>
          <Link href="/">
            <StyledLogo />
          </Link>
        </Column>
        <Column style={{ height: "40px", marginTop: "28px" }}>
          <FloatingNavBar onClick={onNavClick} state={drawerState} />
        </Column>
        <Drawer
          state={drawerState}
          setState={setDrawerState}
          heading={navDrawerData.heading}
          links={navDrawerData.links}
        />
      </Container>
    </Nav>
  );
};

export default Navbar;
