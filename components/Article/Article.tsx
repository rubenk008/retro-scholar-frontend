import React from "react";

import ArticleCollapsed from "./ArticleCollapsed";

import ArticleProps from "./Article.types";

const Article = ({
  cardData,
  variant = "small",
  withMargin = false,
}: ArticleProps) => {
  return (
    <ArticleCollapsed
      tags={cardData.tags}
      title={cardData.title}
      media={cardData.media}
      variant={variant}
      withMargin={withMargin}
    />
  );
};

export default Article;
