import React from "react";
import Link from "next/link";
import clsx from "clsx";

import styled from "styled-components";

import Props from "./Footer.types";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 180px;
  background: var(--cranberry);
  margin: 0;

  @media screen and (min-width: 768px) {
    height: 128px;
  }
`;

const Container = styled.div``;

const Column = styled.div``;

const Copyright = styled.div``;

const LinkList = styled.ul``;
const LinkListItem = styled.li``;

const SocialLinkList = styled.ul``;
const SocialLinkListItem = styled.ul``;

const Footer = ({ links, socialLinks }: Props) => {
  return (
    <StyledFooter>
      <Container>
        <Column>
          <Copyright />
        </Column>
        <Column>
          <LinkList>
            {links &&
              links.map((link) => (
                <LinkListItem>
                  <Link href={link.href}></Link>
                </LinkListItem>
              ))}
          </LinkList>
          <SocialLinkList>
            {socialLinks &&
              socialLinks.map((socialLink) => (
                <SocialLinkListItem>
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
