import React, { useEffect } from "react";
import styled from "styled-components";

import { useIsLarge } from "../../hooks/useMediaQuery";

import pxToRem from "../../utils/pxToRem";

import Card from "../../components/Card";
import Media from "../../components/Media";
import Typography from "../../components/Typography";

const Section = styled.section`
  width: 100vw;
`;

const TopCategoriesHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto auto;
  padding: ${pxToRem(44)} ${pxToRem(32)} ${pxToRem(40)};

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem(44)} ${pxToRem(114)} ${pxToRem(44)};
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

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding: 0 ${pxToRem(120)};

    > div {
      margin-bottom: ${pxToRem(0)};
    }
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

const TopCategoriesSection = ({ slice }) => {
  const isLargeScreen = useIsLarge();

  useEffect(() => {
    console.log(slice);
  }, []);

  return (
    <Section>
      <TopCategoriesHeading>
        <Typography variant="h4" component={"h2"} color="secondary">
          {slice.primary.sectionTitle}
        </Typography>
      </TopCategoriesHeading>
      <TopCategoryGrid>
        <Card variant="highlightedCat" cardArticleId={0}>
          <HighlightedCatContent>
            <HighlightedCatHeading>
              <Typography variant="h5" component={"h3"} color="white">
                Retro tech
              </Typography>
            </HighlightedCatHeading>
          </HighlightedCatContent>
        </Card>
        <Card variant="highlightedCat" cardArticleId={1}>
          <HighlightedCatContent>
            <HighlightedCatHeading>
              <Typography variant="h5" component={"h3"} color="white">
                ARCHITECTURE
              </Typography>
            </HighlightedCatHeading>
          </HighlightedCatContent>
        </Card>
        <Card variant="highlightedCat" cardArticleId={2}>
          <HighlightedCatContent>
            <HighlightedCatHeading>
              <Typography variant="h5" component={"h3"} color="white">
                Music
              </Typography>
            </HighlightedCatHeading>
          </HighlightedCatContent>
        </Card>
      </TopCategoryGrid>
    </Section>
  );
};

export default TopCategoriesSection;
