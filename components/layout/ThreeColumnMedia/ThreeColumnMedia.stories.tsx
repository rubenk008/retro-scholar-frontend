import React from "react";

import ThreeColumnMedia from "./ThreeColumnMedia";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "article-layout/ThreeColumnMedia",
  component: ThreeColumnMedia,
};

const tempdata = [
  {
    image: {
      dimensions: {
        width: 840,
        height: 800,
      },
      alt: "Bubble Palace outside",
      copyright: null,
      url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format",
    },
  },
  {
    image: {
      dimensions: {
        width: 840,
        height: 800,
      },
      alt: "Bubble Palace outside",
      copyright: null,
      url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format",
    },
  },
  {
    image: {
      dimensions: {
        width: 840,
        height: 800,
      },
      alt: "Bubble Palace outside",
      copyright: null,
      url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format",
    },
  },
];

export const Default = () => <ThreeColumnMedia media={tempdata} />;
