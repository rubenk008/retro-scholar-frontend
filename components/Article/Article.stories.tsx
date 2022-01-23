import React from "react";

import Article from ".";

export default {
  title: "Article",
  component: Article,
};

const articleData = {
  tags: ["story", "people"],
  title: "Lorem ipsum dolor?",
  media: {
    type: "video",
    video: {
      url: "https://www.w3schools.com/howto/rain.mp4",
      playState: true,
    },
  },
};

export const ArticleInGrid = () => <Article cardData={articleData} />;
