import React from "react";
import { RichText, Link } from "prismic-reactjs";
import styled from "styled-components";

interface SectionProps {
  backgroundImage?: string;
}

const Section = styled.section<SectionProps>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${(props) => props.backgroundImage});
  font-family: "Lato", sans-serif;
  margin: 0 0 80px 0;
  padding: 6em 0 6em;
  background-position: center top;
  background-size: cover;
  color: #ffffff;
  line-height: 1.75;
  text-align: center;

  @media screen and (max-width: 767px) {
    margin: 0 0 40px;
    padding: 10em 0 6em;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  width: 90%;
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;

  @media screen and (max-width: 767px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

const Description = styled.div`
  width: 90%;
  max-width: 490px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.a`
  background: #ffffff;
  border-radius: 7px;
  color: #484d52;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 40px;

  &:hover {
    background: #c8c9cb;
  }
`;

const BannerSlice = ({ slice }) => (
  <Section backgroundImage={slice.primary.background.url}>
    <Container>
      <Title>{RichText.asText(slice.primary.title)}</Title>
      <Description>
        <RichText render={slice.primary.description} />
      </Description>
      <Button href={Link.url(slice.primary.link)}>
        {slice.primary.linkLabel}
      </Button>
    </Container>
  </Section>
);

export default BannerSlice;
