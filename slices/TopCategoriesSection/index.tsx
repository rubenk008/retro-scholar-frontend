import React, { useEffect } from "react";
import styled from "styled-components";

import { useIsLarge } from "../../hooks/useMediaQuery";

import pxToRem from "../../utils/pxToRem";

import Card from "../../components/Card";
import Media from "../../components/Media";
import Typography from "../../components/Typography";
import Link from "next/link";

const Section = styled.section`
  width: 100vw;
  background-color: var(--tutu);
  padding: ${pxToRem(100)} 0;
  margin-top: ${pxToRem(-20)};

  @media screen and (min-width: 1024px) {
    margin: 0;
    padding: ${pxToRem(200)} 0;
  }
`;

const TopCategoriesHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto auto;
  padding: 0 ${pxToRem(32)} ${pxToRem(40)};

  @media screen and (min-width: 1024px) {
    padding: 0 ${pxToRem(114)} ${pxToRem(44)};
  }

  @media screen and (min-width: 1440px) {
    max-width: 1600px;
  }
`;

const TopCategoryGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto;
  justify-content: space-between;
  align-items: center;
  padding-left: ${pxToRem(8)};

  > div {
    margin-bottom: ${pxToRem(30)};
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 ${pxToRem(40)};

    > div {
      margin-bottom: ${pxToRem(0)};
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0 ${pxToRem(120)};
  }

  @media screen and (min-width: 1440px) {
    max-width: 1600px;
  }
`;

const HighlightedCatContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--blue-pigment);
`;

const HighlightedCatHeading = styled.div`
  position: absolute;
  bottom: ${pxToRem(30)};
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 1024px) {
    bottom: ${pxToRem(40)};
  }

  @media screen and (min-width: 1440px) {
    bottom: 40px;
  }
`;

const HighlightedCatThumbnail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;

const TopCategoriesSection = ({ slice }) => {
  return (
    <Section>
      <TopCategoriesHeading>
        <Typography variant="h4" component={"h2"} color="secondary">
          {slice.primary.sectionTitle}
        </Typography>
      </TopCategoriesHeading>
      <TopCategoryGrid>
        {slice.items.map((item, index) =>
          index != 3 ? (
            <Link
              href={`/topic/${item.categoryLink.uid}`}
              key={`key-${index + 1}`}
            >
              <Card variant="highlightedCat" cardArticleId={index}>
                <HighlightedCatContent>
                  <HighlightedCatThumbnail>
                    <Media
                      type="image"
                      image={{
                        url: item.categoryThumbnail.url,
                        alt: item.categoryThumbnail.alt,
                      }}
                    />
                  </HighlightedCatThumbnail>
                  <HighlightedCatHeading>
                    <Typography variant="h5" component={"h3"} color="white">
                      {item.categoryName}
                    </Typography>
                  </HighlightedCatHeading>
                </HighlightedCatContent>
              </Card>
            </Link>
          ) : null
        )}
      </TopCategoryGrid>
    </Section>
  );
};

export default TopCategoriesSection;
