import React from "react";

import ArticleCollapsed from "./ArticleCollapsed";

import Props from "./Article.types";

const Article = ({ cardData }: Props) => {
  return (
    <ArticleCollapsed
      tags={cardData.tags}
      title={cardData.title}
      media={cardData.media}
    />
  );
};

export default Article;
