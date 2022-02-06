import React from "react";
import styled from "styled-components";

import Article from "../../Article";

import ArticleGridProps from "./ArticleGrid.types";

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
    padding: 100px 0;
  }
`;

const ArticleGrid = ({ articles }: ArticleGridProps) => {
  return (
    <Grid>
      {articles.map((article, index) => (
        <Article key={`article-${index}`} cardData={article.cardData} />
      ))}
    </Grid>
  );
};

export default ArticleGrid;
