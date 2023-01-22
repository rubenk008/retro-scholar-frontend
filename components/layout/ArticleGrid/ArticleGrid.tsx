import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Link from "next/link";
import Article from "../../Article";
import { useWindowSize } from "../../../hooks/useWindowSize";
import isMobile from "../../../utils/isMobileView";

const Grid = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  padding: 60px 24px 80px 32px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 768px;
    grid-gap: 32px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
    padding: 100px 0 200px;
  }
`;

const ArticleGrid = ({ articles, asPath }: any) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

  return (
    <Grid>
      {articles.map((item, index) => {
        const thumbnailMobile = item.thumbnail.hasOwnProperty("mobile")
          ? item.thumbnail.mobile
          : item.thumbnail;

        const thumbnailDesktop = item.thumbnail;

        return (
          <>
            <Link
              key={`article-${index}`}
              href={`${asPath}?article=${item.uid}`}
              // as={`${asPath}/article/${item.uid}`}
              scroll={false}
              shallow={true}
            >
              <Article
                cardData={{
                  id: item.uid,
                  title: item.title,
                  tags: ["story"],
                  media: {
                    type: "image",
                    image: isMobileView
                      ? { url: thumbnailMobile.url, alt: thumbnailMobile.alt }
                      : {
                          url: thumbnailDesktop.url,
                          alt: thumbnailDesktop.alt,
                        },
                    video: {},
                  },
                }}
                variant="small"
                withMargin={true}
              />
            </Link>
          </>
        );
      })}
    </Grid>
  );
};

export default ArticleGrid;
