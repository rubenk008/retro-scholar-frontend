import React, { useEffect } from "react";
import styled from "styled-components";

import Link from "next/link";
import { useRouter } from "next/router";
import Article from "../../Article";

const Grid = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  padding: 80px 24px 80px 32px;
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
    padding: 200px 0 200px;
  }
`;

const ArticleGrid = ({ articles, asPath }: any) => {
  useEffect(() => {
    console.log(asPath);
  }, [asPath]);

  return (
    <Grid>
      {articles.map((item, index) => (
        <>
          <Link
            key={`article-${index}`}
            href={`${asPath}?article=${item.id}`}
            // as={`${asPath}/article/${item.id}`}
            scroll={false}
            shallow={true}
          >
            <Article
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
              variant="small"
              withMargin={true}
            />
          </Link>
        </>
      ))}
    </Grid>
  );
};

export default ArticleGrid;
