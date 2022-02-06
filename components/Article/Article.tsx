import React from "react";

import ArticleCollapsed from "./ArticleCollapsed";

import ArticleProps from "./Article.types";

const Article = ({ cardData }: ArticleProps) => {
  return (
    <ArticleCollapsed
      tags={cardData.tags}
      title={cardData.title}
      media={cardData.media}
    />
  );
};

export default Article;
