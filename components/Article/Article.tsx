import React, { useState, useEffect } from "react";

import ArticleCollapsed from "./ArticleCollapsed";

import ArticleProps from "./Article.types";
import ArticleExpanded from "./ArticleExpanded";

const Article = ({
  cardData,
  variant = "small",
  withMargin = false,
}: ArticleProps) => {
  const [activeArticleId, setActiveArticleId] = useState(0);

  // useEffect(() => {
  //   console.log("ACTIVE ARTICLE ID", activeArticleId);
  // }, [activeArticleId]);

  return (
    <>
      <ArticleCollapsed
        id={1}
        tags={cardData.tags}
        title={cardData.title}
        media={cardData.media}
        variant={variant}
        withMargin={withMargin}
        onClick={() => setActiveArticleId(1)}
      />
      {activeArticleId === 1 && (
        <ArticleExpanded id={1} media={cardData.media} />
      )}
    </>
  );
};

export default Article;
