import React from "react";

import ArticleGrid from ".";

export default {
  title: "Article Grid",
  component: ArticleGrid,
};

const tempData = [
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
  {
    cardData: {
      tags: ["story", "people"],
      title: "Lorem ipsum dolor?",
      media: {
        type: "video",
        video: {
          url: "https://www.w3schools.com/howto/rain.mp4",
          playState: true,
        },
      },
    },
  },
];

export const Articles = () => <ArticleGrid articles={tempData} />;
