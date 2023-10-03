import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Slider from ".";
import Article from "../Article";
import { EmblaOptionsType } from "embla-carousel-react";

export default {
  title: "Layout/Slider",
  component: Slider,
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

const GlobalStyle = createGlobalStyle`
  body { overflow-x: hidden; }
`;

const Wrapper = styled.div``;

const options: EmblaOptionsType = {
  align: "start",
  containScroll: "trimSnaps",
  skipSnaps: true,
};

export const Default = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Slider slideSpacing={0} options={options}>
        {tempData.map((item, index) => (
          <Article
            key={`article-${index}`}
            cardData={item.cardData}
            variant="regular"
            withMargin={true}
          />
        ))}
        {/* {[...Array(10)].map((item, i) => (
          <Element key={i} style={{ opacity: Math.random() }} />
        ))} */}
      </Slider>
    </Wrapper>
  );
};
