import React from "react";
import styled from "styled-components";

import pxToRem from "../../utils/pxToRem";

import { RichText } from "prismic-reactjs";

import Card from "../../components/Card";
import Media from "../../components/Media";
import Typography from "../../components/Typography";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background: var(--bay-of-many);
  padding: ${pxToRem(188)} ${pxToRem(120)} ${pxToRem(60)};
`;

const SwiperSlide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: calc(1180//1440 * 100vw);
  margin: 0 auto;

  @media screen and (min-width: 1440px) {
    max-width: 1180px;
  }
`;

const SwiperContentHeading = styled.div`
  padding-top: ${pxToRem(55)};
  max-width: calc(540 / 1440 * 100vw);
  min-width: 540px;
`;

const slideCountIndicator = styled.div``;

const HomepageHero = ({ slice }) => {
  console.log(slice);
  return (
    <Section>
      <SwiperSlide>
        <SwiperContentHeading>
          <Typography variant="subtitle3">{slice.items[0].category}</Typography>
          <Typography variant="h2">
            {slice.primary.title ? (
              <RichText render={slice.items[0].title} />
            ) : (
              "Hema Melani: Actress, writer, Dancer and Politician"
            )}
          </Typography>
        </SwiperContentHeading>
        <Card variant="outlined" hasDropShadow={true}>
          <Media
            type="image"
            image={{
              url: slice.items[0].thumbnail.url,
              alt: slice.items[0].thumbnail.alt,
            }}
          />
        </Card>
      </SwiperSlide>
    </Section>
  );
};

export default HomepageHero;
