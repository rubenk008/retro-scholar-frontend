import React from "react";
// import useState from "storybook-addon-state";

import StyledArticle from "./Article";
// import ArticleExpanded from "./ArticleExpanded";

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

export const Article = () => {
  // const [activeArticleId, setActiveArticleId] = useState("activeArticleId", 0);

  return (
    <>
      <StyledArticle
        cardData={articleData}
        variant="regular"
        onClick={() => {}}
      />
      {/* {activeArticleId === 1 && (
        <ArticleExpanded
          // media={articleData.media}
          onClick={() => {
            setActiveArticleId(0);
          }}
        >
          <div></div>
        </ArticleExpanded>
      )} */}
    </>
  );
};
