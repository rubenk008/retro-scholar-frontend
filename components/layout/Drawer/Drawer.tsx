import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIsMedium } from "../../../hooks/useMediaQuery";

import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import Typography from "../../Typography";

import Props from "./Drawer.types";

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   max-height: 100vh;
//   height: var(--app-height);
//   width: 100vw;
//   background: var(--bay-of-many);
//   opacity: ${(props: { menuIsOpen: boolean }) => (props.menuIsOpen ? 0.8 : 0)};
//   transition: all 450ms ease-in-out;
//   transition-delay: ${(props: { menuIsOpen: boolean }) =>
//     props.menuIsOpen ? "0ms" : "250ms"};
// `;

const MenuWrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  top: 8.8rem;
  right: 5.2rem;
  pointer-events: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "" : "none"};

  padding: 3rem 4.6rem 3rem 2.5rem;

  @media screen and (min-width: 768px) {
    width: 35rem;
    padding: 3rem 4.6rem 3rem 2.5rem;
  }
`;

const MenuBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: var(--tutu);
  box-shadow: 0px 4px 4px 0 rgba(9, 25, 189, 0.18);
  border-radius: 2rem;
  transform-origin: top center;
  opacity: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "1" : "0"};
  transform: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "translateY(0px)" : "translateY(-30px)"};

  transition: all 250ms
    ${(props: { menuIsOpen: boolean }) =>
      props.menuIsOpen ? "ease-out" : "ease-in"};
  transition-delay: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "200ms" : "0ms"};
`;

const LinkList = styled(motion.div)`
  list-style: none;
  z-index: 1;
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const LinkListHeading = styled(motion.div)`
  margin-bottom: 12px;
`;

const LinkListItem = styled.div`
  padding: 0 0 2rem 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  opacity: ${(props: { opacity: number }) => props.opacity};

  transition: all 250ms ease-in-out;
  transition-delay: 10ms;
`;

const LinkListItemCounter = styled.div`
  width: 32px;
  padding-top: 1px;

  @media screen and (min-width: 768px) {
    width: 3.4rem;
  }
`;

const LinkListItemContent = styled.div`
  > p {
    margin-top: 0.2rem;
  }

  @media screen and (min-width: 768px) {
    max-width: 36.6rem;
  }
`;

const Drawer = ({ state = "closed", setState, heading, links }: Props) => {
  const ref = useRef();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [makeDrawerVisible, setMakeDrawerVisible] = useState(false);

  const [linkItems, setLinkItems] = useState([]);

  const isDesktop = useIsMedium();

  const onCrossClick = () => {
    setDrawerOpen(drawerOpen ? false : true);
    setState("closed");
  };

  const fadeOnHover = (index) => {
    const updatedLinks = [...linkItems];

    for (let i = 0; i < updatedLinks.length; i++) {
      if (i === index) {
        updatedLinks[index] = {
          ...updatedLinks[index],
          opacity: 1,
        };
      } else if (i !== index) {
        updatedLinks[i] = {
          ...updatedLinks[i],
          opacity: 0.5,
        };
      }
    }

    setLinkItems(updatedLinks);
  };

  const fadeInOnLeave = () => {
    const updatedLinks = [...linkItems];

    for (let i: number = 0; i < updatedLinks.length; i++) {
      updatedLinks[i] = {
        ...updatedLinks[i],
        opacity: 1,
      };
    }

    setLinkItems(updatedLinks);
  };

  useEffect(() => {
    if (links.length > 0) {
      setLinkItems(links);
    }
  }, [links]);

  useEffect(() => {
    if (state === "open") {
      setDrawerOpen(true);
      disableBodyScroll(ref.current);
    } else {
      setDrawerOpen(false);
      clearAllBodyScrollLocks();
    }
  }, [state]);

  useEffect(() => {
    if (drawerOpen && !makeDrawerVisible) {
      setMakeDrawerVisible(true);
    }
    if (!drawerOpen && makeDrawerVisible) {
      setTimeout(() => {
        setMakeDrawerVisible(false);
      }, 600);
    }
  }, [drawerOpen, makeDrawerVisible]);

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const item = isDesktop
    ? {
        hidden: {
          opacity: 0,
          transform: "translateY(-20px)",
          transition: { duration: 0.18, ease: "easeIn" },
        },
        show: {
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.22, ease: "easeOut" },
        },
      }
    : {
        hidden: {
          opacity: 0,
          transform: "translateY(40px)",
          transition: { duration: 0.18, ease: "easeIn" },
        },
        show: {
          opacity: 1,
          transform: "translateY(0px)",
          transition: { duration: 0.22, ease: "easeOut" },
        },
      };

  return (
    <MenuWrapper menuIsOpen={drawerOpen}>
      <MenuBackdrop menuIsOpen={drawerOpen} />
      <LinkList
        initial="hidden"
        variants={container}
        animate={drawerOpen ? "show" : "hidden"}
      >
        <LinkListHeading variants={item}>
          <Typography variant="h6SmallAlt" color="primary" component="h2">
            {heading}
          </Typography>
        </LinkListHeading>
        <nav>
          {linkItems &&
            linkItems.map((link, index) => (
              // eslint-disable-next-line react/jsx-key
              <Link
                legacyBehavior={false}
                href={`/topic/${link.href}`}
                onClick={() => {
                  onCrossClick();
                }}
                key={`key-${index}`}
              >
                <motion.li variants={item}>
                  <LinkListItem
                    key={`key-${index}`}
                    opacity={link.opacity}
                    onMouseOver={() => fadeOnHover(index)}
                    onMouseLeave={fadeInOnLeave}
                  >
                    <LinkListItemCounter>
                      <Typography
                        variant="h6SmallAlt"
                        color="primary"
                        component="p"
                      >
                        {`${index < 10 ? 0 : ""}${index + 1}`}
                      </Typography>
                    </LinkListItemCounter>
                    <LinkListItemContent>
                      <Typography
                        variant="h3Alt"
                        color="primary"
                        component="h4"
                      >
                        {link.name}
                      </Typography>
                      <Typography
                        variant="subtitle4"
                        color="primary"
                        component="p"
                      >
                        {link.desc}
                      </Typography>
                    </LinkListItemContent>
                  </LinkListItem>
                </motion.li>
              </Link>
            ))}
        </nav>
      </LinkList>
    </MenuWrapper>
  );
};

export default Drawer;
