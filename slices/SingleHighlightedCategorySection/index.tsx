import React, { useEffect } from "react";
import styled from "styled-components";

import { useIsLarge } from "../../hooks/useMediaQuery";

import pxToRem from "../../utils/pxToRem";

import Carousel from "../../components/Carousel";
import Article from "../../components/Article";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import ArrowCircle from "../../components/icons/ArrowCircle";

const Section = styled.section`
  width: 100vw;
  background-color: var(--tutu);
  padding: ${pxToRem(100)} 0 0;

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem(200)} 0 0;
  }
`;

const HighlightedCategoryHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 0 0;

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem(44)} ${pxToRem(114)} ${pxToRem(32)};
  }

  @media screen and (min-width: 1440px) {
    max-width: 1600px;
  }
`;

const ViewCategoryLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SingleHighlightedCategorySection = ({ slice }) => {
  const isLargeScreen = useIsLarge();

  return (
    <Section>
      <HighlightedCategoryHeading>
        <Typography variant="h4" component={"h2"} color="secondary">
          {slice.primary.collectionTitle}
        </Typography>
        <ViewCategoryLink>
          <Typography variant="h6" component={"span"} color="secondary">
            view all in the collection
          </Typography>
          <IconButton
            size="small"
            icon={
              <ArrowCircle
                height={pxToRem(24)}
                width={pxToRem(24)}
                style={{ marginLeft: pxToRem(16), transform: "scale(1)" }}
              />
            }
          />
        </ViewCategoryLink>
      </HighlightedCategoryHeading>

      <Carousel
        insetLeft={isLargeScreen ? pxToRem(120) : pxToRem(32)}
        insetRight={isLargeScreen ? pxToRem(120) : pxToRem(32)}
      >
        {slice.items.map((item, index) => (
          <Article
            key={`article-${index}`}
            cardData={{
              id: item.id,
              title: item.title,
              tags: ["story"],
              media: {
                type: "image",
                image: { url: item.thumbnail.url, alt: item.thumbnail.alt },
                video: {},
              },
            }}
            variant="regular"
            withMargin={true}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default SingleHighlightedCategorySection;
