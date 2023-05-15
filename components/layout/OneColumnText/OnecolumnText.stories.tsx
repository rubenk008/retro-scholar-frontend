import React from "react";

import OneColumnText from "./OneColumnText";
import Typography from "../../Typography/Typography";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "article-layout/OneColumnText",
  component: OneColumnText,
};

const tempData =
  "Sed laoreet vitae neque ut blandit. Integer in nisl blandit, laoreet mi ut, porta magna. Integer ut auctor diam, quis posuere ipsum. Nam ut augue eu mauris feugiat scelerisque sit amet in velit. Suspendisse auctor dolor id vestibulum tempor. Suspendisse ac massa enim. Nunc posuere sit amet purus id mattis. Duis finibus consectetur erat mollis sagittis.";

export const Default = () => (
  <OneColumnText>
    <Typography variant="body1" component="p">
      {tempData}
    </Typography>
  </OneColumnText>
);
