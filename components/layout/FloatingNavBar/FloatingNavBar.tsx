import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Nav = styled(motion.nav)``;

const NavItem = styled.a``;

const FloatingNavBar = () => {
  return (
    <Nav>
      <NavItem>Home</NavItem>
    </Nav>
  );
};

export default FloatingNavBar;
