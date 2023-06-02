import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IconButton from "../../IconButton";

import pxToRem from "../../../utils/pxToRem";
import Search from "../../icons/Search";
import HamburgerMenu from "../../icons/HamburgerMenu/HamburgerMenu";
import Bookmark from "../../icons/Bookmark/Bookmark";
import Cross from "../../icons/Cross/Cross";
import { useIsMedium } from "../../../hooks/useMediaQuery";
import FloatingNavBarProps from "./FloatingNavBar.types";

const Nav = styled(motion.nav)`
  width: 17.2rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 768px) {
    width: 15.2rem;
    padding: 0 1.2rem;
    margin-top: 2.6rem;
  }
`;

const NavBarBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 17.2rem;
  height: 4rem;
  border-radius: 20rem;
  background: var(--tutu);
  box-shadow: 0px 4px 4px rgba(9, 25, 189, 0.18);

  @media screen and (min-width: 768px) {
    width: 15.2rem;
    left: auto;
    transform: none;
    right: 0;
  }
`;

const NavBarItems = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  padding: 0 1.4rem;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    padding: 0 1.2rem;
    transform: none;
    left: auto;
    right: 0;
  }
`;

const NavItem = styled(motion.a)``;

const CloseButton = styled(motion.div)`
  margin: 0 0 0 auto;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    transform: translateX(0%);
    left: auto;
    right: 0;
    opacity: 0;
  }
`;

const FloatingNavBar = ({ onClick, state }: FloatingNavBarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isDesktop = useIsMedium();

  const handleClick = (event: any) => {
    onClick(event);
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (state === "closed") {
      setIsCollapsed(false);
    }
  }, [state]);

  const NavBarVariants = {
    collapsed: {
      width: "4rem",
    },
    expanded: {
      width: "15.2rem",
    },
  };

  const CloseButtonVariants = isDesktop
    ? {
        collapsed: {
          transform: "translateX(0px)",
          opacity: 1,
          transition: { duration: 0.2, delay: 0.15, ease: "ease" },
        },
        expanded: {
          transform: "translateX(-10px)",
          opacity: 0,
        },
      }
    : {
        collapsed: {
          opacity: 1,
          transform: "translateX(-50%) scale(1)",
          transition: { duration: 0.25, delay: 0.15, ease: "easeOut" },
        },
        expanded: {
          transform: "translateX(-50%) scale(0.8)",
          opacity: 0,
        },
      };

  const container = isDesktop
    ? {
        collapsed: {
          transition: {
            staggerChildren: 0.04,
          },
        },
        expanded: {
          transition: {
            delayChildren: 2,
            staggerChildren: 2,
          },
        },
      }
    : {
        collapsed: {
          transition: {
            staggerChildren: 0,
          },
        },
        expanded: {
          transition: {
            delayChildren: 0,
            staggerChildren: 0,
          },
        },
      };

  const item = {
    collapsed: {
      opacity: 0,
      transform: "translateX(10px)",
      transition: { duration: 0.12, ease: "easeIn" },
    },
    expanded: {
      opacity: 1,
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  const itemLeft = {
    collapsed: {
      opacity: 0,
      transform: "translateX(10px) scale(0.8)",
      transition: { duration: 0.18, ease: "easeIn" },
    },
    expanded: {
      opacity: 1,
      transform: "translateX(0px) scale(1)",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  const itemCenter = {
    collapsed: {
      opacity: 0,
      transform: "scale(0.8)",
      transition: { duration: 0.18, ease: "easeIn" },
    },
    expanded: {
      opacity: 1,
      transform: "scale(1)",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  const itemRight = {
    collapsed: {
      opacity: 0,
      transform: "translateX(-10px) scale(0.8)",
      transition: { duration: 0.18, ease: "easeIn" },
    },
    expanded: {
      opacity: 1,
      transform: "translateX(0px)  scale(1)",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  return (
    <Nav>
      <NavBarBackground
        variants={NavBarVariants}
        animate={isCollapsed ? "collapsed" : ""}
        initial={"expanded"}
      />

      <NavBarItems
        animate={isCollapsed ? "collapsed" : ""}
        initial={"expanded"}
        variants={container}
      >
        <NavItem variants={isDesktop ? item : itemLeft} onClick={handleClick}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            icon={
              <Bookmark
                height={pxToRem(40)}
                width={pxToRem(40)}
                color="var(--cranberry)"
              />
            }
          />
        </NavItem>
        <NavItem variants={isDesktop ? item : itemCenter} onClick={handleClick}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            icon={
              <Search
                height={pxToRem(40)}
                width={pxToRem(40)}
                color="var(--cranberry)"
              />
            }
          />
        </NavItem>
        <NavItem variants={isDesktop ? item : itemRight} onClick={handleClick}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            icon={
              <HamburgerMenu
                height={pxToRem(40)}
                width={pxToRem(40)}
                color="var(--cranberry)"
              />
            }
          />
        </NavItem>
      </NavBarItems>

      {isCollapsed && (
        <CloseButton
          variants={CloseButtonVariants}
          animate={isCollapsed ? "collapsed" : ""}
          initial={"expanded"}
          onClick={handleClick}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            icon={
              <Cross
                height={pxToRem(40)}
                width={pxToRem(40)}
                color="var(--cranberry)"
              />
            }
          />
        </CloseButton>
      )}
    </Nav>
  );
};

export default FloatingNavBar;
