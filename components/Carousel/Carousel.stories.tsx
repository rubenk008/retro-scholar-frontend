import React from "react";

import { useIsMedium } from "../../hooks/useMediaQuery";

import StyledCarousel from ".";
import Article from "../Article";

export default {
  title: "Layout/Carousel",
  component: StyledCarousel,
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

export const Carousel = () => {
  const isDesktop = useIsMedium();

  return (
    <StyledCarousel
      insetLeft={isDesktop ? "120px" : "32px"}
      insetRight={isDesktop ? "120px" : "32px"}
    >
      {tempData.map((item, index) => (
        <Article
          key={`article-${index}`}
          cardData={item.cardData}
          variant="regular"
          withMargin={true}
        />
      ))}
    </StyledCarousel>
  );
};
