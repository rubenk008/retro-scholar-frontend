import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIsMedium } from "../../../hooks/useMediaQuery";

import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import Typography from "../../Typography";

import Cross from "../../icons/Cross";

import Props from "./Drawer.types";

const Wrapper = styled.div`
  position: fixed;
  z-index: 999999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  max-height: 100vh;
  height: var(--app-height);
  width: 100vw;
  pointer-events: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "" : "none"};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100vh;
  height: var(--app-height);
  width: 100vw;
  background: var(--bay-of-many);
  opacity: ${(props: { menuIsOpen: boolean }) => (props.menuIsOpen ? 0.8 : 0)};
  transition: all 450ms ease-in-out;
  transition-delay: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "0ms" : "250ms"};
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  max-height: 100vh;
  height: var(--app-height);
  width: 100vw;
  padding: 48px 32px;

  @media screen and (min-width: 768px) {
    width: 119.2rem;
    padding: 6rem 8rem;
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
  background: var(--cranberry);
  box-shadow: -2px 4px 4px 0 rgba(219, 84, 147, 0.25);

  transform: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "translateX(0%)" : "translateX(100%)"};

  transition: all 450ms
    ${(props: { menuIsOpen: boolean }) =>
      props.menuIsOpen
        ? "cubic-bezier(0.55, 0.47, 0.11, 0.94)"
        : "cubic-bezier(0.89, 0.06, 0.45, 0.53)"};
  transition-delay: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "0ms" : "200ms"};
`;

const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 36px;
  z-index: 2;
  cursor: pointer;
  opacity: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "1" : "0"};

  transition: all 150ms ease-in-out;
  transition-delay: ${(props: { menuIsOpen: boolean }) =>
    props.menuIsOpen ? "50ms" : "400ms"};

  @media screen and (min-width: 768px) {
    right: 7rem;
    top: 7.4rem;
  }
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
  padding: 0 0 24px 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  opacity: ${(props: { opacity: number }) => props.opacity};

  transition: all 250ms ease-in-out;
  transition-delay: 10ms;
`;

const LinkListItemCounter = styled.div`
  width: 30px;
  padding-top: 1px;

  @media screen and (min-width: 768px) {
    width: 3.4rem;
  }
`;

const LinkListItemContent = styled.div`
  > p {
    margin-top: 8px;
  }

  max-width: 290px;

  @media screen and (min-width: 768px) {
    max-width: 36.6rem;
  }
`;

const SocialLinkList = styled(motion.ul)`
  margin: 0;
  padding: 0;
  display: flex;
  position: absolute;
  left: 32px;
  bottom: 48px;
  flex-direction: row;
  list-style-type: none;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    margin: 0 0 0 8px;
    left: auto;
    right: 8rem;
    bottom: 6rem;
  }
`;
const SocialLinkListItem = styled.div`
  margin: 0 12px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > svg {
    height: 18px;
    width: 18px;

    @media screen and (min-width: 768px) {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 3.2rem;
  }
`;

const Drawer = ({
  state = "closed",
  setState,
  heading,
  links,
  socialLinks,
}: Props) => {
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

  const item = {
    hidden: {
      opacity: 0,
      transform: "translateX(40px)",
      transition: { duration: 0.18, ease: "easeIn" },
    },
    show: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  const containerSocial = isDesktop
    ? {
        hidden: {
          transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
          },
        },
        show: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }
    : {
        hidden: {
          transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
          },
        },
        show: {
          transition: {
            delayChildren: 0.24,
            staggerChildren: 0.05,
          },
        },
      };

  const itemSocial = {
    hidden: {
      opacity: 0,
      transform: "translateX(20px)",
      transition: { duration: 0.18, ease: "easeIn" },
    },
    show: {
      opacity: 1,
      transform: "translateX(0px)",
      transition: { duration: 0.22, ease: "easeOut" },
    },
  };

  return (
    <Wrapper menuIsOpen={makeDrawerVisible} ref={ref}>
      <Overlay menuIsOpen={drawerOpen} onClick={onCrossClick} />
      <MenuWrapper>
        <MenuBackdrop menuIsOpen={drawerOpen} />
        <LinkList
          initial="hidden"
          variants={container}
          animate={drawerOpen ? "show" : "hidden"}
        >
          <LinkListHeading variants={item}>
            <Typography variant="h6Small" color="white" component="h2">
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
                          variant="h6Small"
                          color="white"
                          component="p"
                        >
                          {`${index < 10 ? 0 : ""}${index + 1}`}
                        </Typography>
                      </LinkListItemCounter>
                      <LinkListItemContent>
                        <Typography variant="h4" color="white">
                          {link.name}
                        </Typography>
                        <Typography
                          variant="subtitle3"
                          color="white"
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
        <SocialLinkList
          variants={containerSocial}
          animate={drawerOpen ? "show" : "hidden"}
        >
          {socialLinks &&
            socialLinks.map((socialLink, index) => (
              // eslint-disable-next-line react/jsx-key
              <motion.li variants={itemSocial}>
                <SocialLinkListItem key={`key-${index}`}>
                  <Link href={socialLink.href}>
                    <a target="_blank" rel="noopener noreferrer">
                      {socialLink.icon}
                    </a>
                  </Link>
                </SocialLinkListItem>
              </motion.li>
            ))}
        </SocialLinkList>
        <CloseButton onClick={onCrossClick} menuIsOpen={drawerOpen}>
          <Cross />
        </CloseButton>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Drawer;
