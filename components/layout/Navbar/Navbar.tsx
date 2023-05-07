import React, { useEffect } from "react";
import styled from "styled-components";

import Link from "next/link";

import Typography from "../../Typography";

import Props from "./Navbar.types";

import LogoWithName from "../../icons/LogoWithName";
import SearchIcon from "../../icons/Search";

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
  max-width: 144rem;
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

const CustomLink = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const LinkList = styled.ul`
  list-style-type: none;
  align-self: flex-start;
  margin: auto 0;
  padding: 0;
  flex-direction: row;
  align-items: center;
  display: flex;

  @media screen and (min-width: 920px) {
    height: 40px;
  }
`;

const LinkListItem = styled.li`
  margin: 0 0 0px 20px;
  height: 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;

  & > h6 {
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }

  &:after {
    content: " ";
    width: 6px;
    height: 6px;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform-origin: center;
    transform: translateX(-50%) scale(0);
    background: var(--fog);
    border-radius: 30px;
    transition: transform 250ms ease-in-out;
  }

  &.more-menu-link {
    &:after {
      display: none;
    }
    & > svg {
      margin-top: -4px;
      margin-left: 2px;
      transition: opacity 250ms ease-in-out;
    }
  }

  &:hover {
    &:after {
      transform: translateX(-50%) scale(1);
    }
    & > h6,
    svg {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 36px;
  }
`;

const Search = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin: 1px 0 0 20px;
  cursor: pointer;
  position: relative;
`;

const Navbar = ({ links, theme = "dark" }: Props) => {
  return (
    <Nav>
      <Container>
        <Column>
          <Link href="/">
            <StyledLogo />
          </Link>
        </Column>
        <Column style={{ height: "40px", marginTop: "28px" }}>
          <LinkList>
            {links &&
              links.map((link, index) => (
                <LinkListItem key={`key-${index}`}>
                  <CustomLink
                    type="button"
                    aria-label={link.name}
                    onClick={link.onClick}
                  >
                    <Typography
                      variant="h6Alt"
                      color={theme === "dark" ? "off-white" : "primary"}
                    >
                      {link.name}
                    </Typography>
                  </CustomLink>
                </LinkListItem>
              ))}
          </LinkList>
          <Search>
            <SearchIcon color={theme === "dark" ? "#DDE0FF" : "#DB5493"} />
          </Search>
        </Column>
      </Container>
    </Nav>
  );
};

export default Navbar;
