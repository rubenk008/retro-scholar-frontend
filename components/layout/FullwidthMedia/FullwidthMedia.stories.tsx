import React from "react";

import FullwidthMedia from "./FullwidthMedia";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "article-layout/FullwidthMedia",
  component: FullwidthMedia,
};

const tempdata = {
  image: {
    dimensions: {
      width: 840,
      height: 600,
    },
    alt: "Bubble Palace outside",
    copyright: null,
    url: "https://images.prismic.io/retro-scholar/2065ebf9-1bf4-42f5-80e3-9a1cd669b18d_Bubble+Palace_outside.jpeg?auto=compress,format",
  },
};

export const Default = () => <FullwidthMedia image={tempdata.image} />;
