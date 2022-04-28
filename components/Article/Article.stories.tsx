import React from "react";

import StyledArticle from ".";

export default {
  title: "Article",
  component: StyledArticle,
};

const articleData = {
  id: 1,
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

export const Article = () => (
  <StyledArticle cardData={articleData} variant="regular" />
);
