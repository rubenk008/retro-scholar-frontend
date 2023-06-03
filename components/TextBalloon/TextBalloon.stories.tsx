import React from "react";
import TextBalloon from "./TextBalloon";

import Typography from "../Typography";

export default {
  title: "TextBalloon",
  component: TextBalloon,
};
export const Basic = () => (
  <TextBalloon>
    <Typography variant="body2" component="p" color="white">
      Cube houses (Dutch: Kubuswoningen) are a set of innovative houses built in
      Rotterdam in the Netherlands, designed by architect Piet Blom and based on
      Cube houses (Dutch: Kubuswoningen) are a set of innovative houses built in
      Rotterdam in the Netherlands, designed by architect Piet Blom and based on
    </Typography>
  </TextBalloon>
);
