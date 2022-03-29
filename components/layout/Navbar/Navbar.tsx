import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Typography from "../../Typography";

import Props from "./Navbar.types";

import LogoWithName from "../../icons/LogoWithName";
import SearchIcon from "../../icons/Search";
import DonerMenu from "../../icons/DonerMenu";

const Nav = styled.nav`
  width: 100vw;
  height: 180px;
  background: var(--bay-of-many);
  margin: 0;

  @media screen and (min-width: 768px) {
    height: 128px;
    padding-top: 26px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 48px 32px 54px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0px 52px 0;
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
`;

const StyledLogo = styled(LogoWithName)`
  transform: rotate(-2deg) scale(0.7);

  @media screen and (min-width: 768px) {
    transform: rotate(-2deg) scale(1);
  }
`;

const LinkListDesktop = styled.ul`
  list-style-type: none;
  align-self: flex-start;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: center;
  display: none;

  @media screen and (min-width: 920px) {
    height: 40px;
    display: flex;
  }
`;

const LinkListMobile = styled.ul`
  list-style-type: none;
  align-self: flex-start;
  margin: 0;
  padding: 0;
  flex-direction: row;
  align-items: center;
  display: none;

  @media screen and (min-width: 920px) {
    height: 40px;
    display: flex;
  }
`;

const LinkListItem = styled.li`
  margin: 0 0 16px;
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

const Navbar = ({ links }: Props) => {
  return (
    <Nav>
      <Container>
        <Column>
          <StyledLogo />
        </Column>
        <Column style={{ height: "40px", marginTop: "28px" }}>
          <LinkListDesktop>
            {links &&
              links.map((link, index) => (
                <LinkListItem key={`key-${index}`}>
                  <Link href={link.href}>
                    <Typography variant="h6Alt" color="off-white">
                      {link.name}
                    </Typography>
                  </Link>
                </LinkListItem>
              ))}
          </LinkListDesktop>
          <Search>
            <SearchIcon color="#DDE0FF" />
          </Search>
        </Column>
      </Container>
    </Nav>
  );
};

export default Navbar;
