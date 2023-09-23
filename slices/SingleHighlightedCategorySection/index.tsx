import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Link from "next/link";

import { useIsLarge } from "../../hooks/useMediaQuery";

import pxToRem from "../../utils/pxToRem";

import Carousel from "../../components/Carousel";
import Article from "../../components/Article";
import Typography from "../../components/Typography";
import IconButton from "../../components/IconButton";
import ArrowCircle from "../../components/icons/ArrowCircle";
import { useWindowSize } from "../../hooks/useWindowSize";
import isMobile from "../../utils/isMobile";

const Section = styled.section`
  width: 100%;
  background-color: var(--tutu);
  padding: ${pxToRem(100)} 0 ${pxToRem(20)};

  @media screen and (min-width: 1024px) {
    padding: ${pxToRem(200)} 0 0;
  }
`;

const HighlightedCategoryHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 0 0;
  padding: 0 ${pxToRem(24)} ${pxToRem(36)};
  max-width: ${pxToRem(300)};

  @media screen and (min-width: 1024px) {
    max-width: 100%;
    padding: ${pxToRem(44)} ${pxToRem(114)} ${pxToRem(32)};
  }

  @media screen and (min-width: 1440px) {
    max-width: 1600px;
  }
`;

const StyledArrowCircle = styled(ArrowCircle)`
  transform: "scale(1)";

  @media screen and (min-width: 1024px) {
    margin-left: ${pxToRem(16)};
  }
`;

const ViewCategoryLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding: ${pxToRem(36)} ${pxToRem(24)} 0;
  cursor: pointer;

  > span {
    margin-right: ${pxToRem(8)};
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
    justify-content: center;

    > span {
      margin-right: 0;
    }
  }
`;

const getTags = (pageType: string) => {
  const tags = [];

  if (pageType === "story-page") {
    tags.push("story");
  }

  if (pageType === "page") {
    tags.push("longread");
  }

  return tags;
};

const SingleHighlightedCategorySection = ({ slice }) => {
  const isLargeScreen = useIsLarge();

  const [isMobileView, setIsMobileView] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

  return (
    <Section>
      <HighlightedCategoryHeading>
        <Typography variant="h4" component={"h2"} color="secondary">
          {slice.primary.collectionTitle}
        </Typography>
        {isLargeScreen && (
          <Link
            href={
              slice.primary.categoryLink.hasOwnProperty("slug")
                ? `/topic/${slice.primary.categoryLink.slug}`
                : ""
            }
            scroll={false}
          >
            <ViewCategoryLink>
              <Typography variant="h6" component={"span"} color="secondary">
                view all in the collection
              </Typography>
              <IconButton
                size="small"
                icon={
                  <StyledArrowCircle height={pxToRem(24)} width={pxToRem(24)} />
                }
              />
            </ViewCategoryLink>
          </Link>
        )}
      </HighlightedCategoryHeading>
      <Carousel
        insetLeft={isLargeScreen ? pxToRem(120) : pxToRem(32)}
        insetRight={isLargeScreen ? pxToRem(120) : pxToRem(32)}
      >
        {slice.items.map((item, index) => {
          const thumbnailMobile = item.thumbnail.hasOwnProperty("mobile")
            ? item.thumbnail.mobile
            : item.thumbnail;

          const thumbnailDesktop = item.thumbnail;

          const categories = item.category.map((category) => {
            return category.text;
          });

          const tags = getTags(item.type);

          return (
            <Link
              key={`article-${index}`}
              href={`/?article=${item.uid}`}
              as={`/article/${item.uid}`}
              scroll={false}
              shallow={true}
            >
              <Article
                cardData={{
                  id: item.id,
                  title: item.title,
                  tags: [...tags, ...categories],
                  media: {
                    type: "image",
                    image: {
                      url: thumbnailMobile.url,
                      alt: thumbnailMobile.alt,
                    },
                    video: {},
                  },
                }}
                variant="regular"
                withMargin={true}
              />
            </Link>
          );
        })}
      </Carousel>
      {!isLargeScreen && (
        <Link href="/topic/retro-tech" scroll={false}>
          <ViewCategoryLink>
            <Typography variant="h6" component={"span"} color="secondary">
              view all in the collection
            </Typography>
            <IconButton
              size="small"
              icon={
                <StyledArrowCircle height={pxToRem(24)} width={pxToRem(24)} />
              }
            />
          </ViewCategoryLink>
        </Link>
      )}
    </Section>
  );
};

export default SingleHighlightedCategorySection;
