import React from "react";

import ArticleMasthead from "./ArticleMasthead";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "article-layout/ArticleMasthead",
  component: ArticleMasthead,
};

const tempdata = {
  id: "bubble_palace",
  uid: "bubble_palace",
  category: [
    {
      type: "paragraph",
      text: "Architecture",
      spans: [],
    },
  ],
  title: "The Bubble Palace (Palais Bulles)",
  thumbnail: {
    dimensions: {
      width: 2153,
      height: 1857,
    },
    alt: null,
    copyright: null,
    url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format",
    mobile: {
      dimensions: {
        width: 414,
        height: 736,
      },
      alt: null,
      copyright: null,
      url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format&rect=691,0,1045,1857&w=414&h=736",
    },
    square: {
      dimensions: {
        width: 495,
        height: 495,
      },
      alt: null,
      copyright: null,
      url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format&rect=296,0,1857,1857&w=495&h=495",
    },
  },
  introduction:
    "Aliquam iaculis eros neque, a malesuada nunc euismod vel. Ut nulla lacus, tempor et auctor at, pulvinar sed turpis. Integer aliquam mi laoreet sapien ullamcorper ullamcorper.",
  first_paragraph:
    "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna. Integer ut auctor diam, quis posuere ipsum. Nam ut augue eu mauris feugiat scelerisque sit amet in velit. Suspendisse auctor dolor id vestibulum tempor. Suspendisse ac massa enim. Nunc posuere sit amet purus id mattis. Duis finibus consectetur erat mollis sagittis.",
};

export const Default = () => (
  <ArticleMasthead
    title={tempdata.title}
    category={tempdata.category[0].text}
    introduction={tempdata.introduction}
    firstParagraph={tempdata.first_paragraph}
    media={tempdata.thumbnail}
    handleClosePage={() => {}}
    articleUrl="https://www.google.com"
  />
);
