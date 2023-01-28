import React from "react";

import ArticleCollapsed from "./ArticleCollapsed";

import ArticleProps from "./Article.types";

const Article = ({
  cardData,
  variant = "small",
  withMargin = false,
  onClick,
}: ArticleProps) => {
  return (
    <ArticleCollapsed
      id={cardData.id}
      tags={cardData.tags}
      title={cardData.title}
      media={cardData.media}
      variant={variant}
      withMargin={withMargin}
      thumbnailDesktopPrecentageFromCenter={
        cardData.thumbnailDesktopPrecentageFromCenter
      }
      onClick={onClick}
    />
  );
};

export default Article;
