import React from "react";
import Link from "next/link";
import styled from "styled-components";

import Typography from "../Typography";

import Props from "./Footer.types";

import Logo from "../icons/Logo";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 180px;
  background: var(--cranberry);
  margin: 0;

  @media screen and (min-width: 768px) {
    height: 128px;
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
    padding: 52px 120px 54px;
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
`;

const StyledLogo = styled(Logo)`
  transform: rotate(-2deg) scale(0.7);
  position: absolute;
  right: -8px;
  top: -58px;

  @media screen and (min-width: 768px) {
    transform: rotate(-2deg) scale(1);
    left: -64px;
    top: -26px;
  }
`;

const Copyright = styled.div`
  position: relative;
  margin: 30px 0 0 0;

  span {
    color: var(--azalea);
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 77px;
  }
`;

const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const LinkListItem = styled.li`
  margin: 0 0 16px;
  display: flex;

  @media screen and (min-width: 768px) {
    margin: 0 0 0 36px;
  }
`;

const SocialLinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    margin: 0 0 0 8px;
  }
`;
const SocialLinkListItem = styled.li`
  margin: 0 12px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    height: 18px;
    width: 18px;
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 32px;
  }
`;

const Footer = ({ links, socialLinks }: Props) => {
  return (
    <StyledFooter>
      <Container>
        <Column>
          <Copyright>
            <StyledLogo />
            <Typography variant="h6Alt" color="white">
              <span>©2021</span> RETRO SCHOLAR
            </Typography>
          </Copyright>
        </Column>
        <Column>
          <LinkList>
            {links &&
              links.map((link, index) => (
                <LinkListItem key={`key-${index}`}>
                  <Link href={link.href}>
                    <Typography variant="h6Alt" color="white">
                      {link.name}
                    </Typography>
                  </Link>
                </LinkListItem>
              ))}
          </LinkList>
          <SocialLinkList>
            {socialLinks &&
              socialLinks.map((socialLink, index) => (
                <SocialLinkListItem key={`key-${index}`}>
                  <Link href={socialLink.href}>{socialLink.icon}</Link>
                </SocialLinkListItem>
              ))}
          </SocialLinkList>
        </Column>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
