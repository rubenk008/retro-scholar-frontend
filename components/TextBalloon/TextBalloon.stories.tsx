import React from "react";
import TextBalloon from "./TextBalloon";

import Typography from "../Typography";

export default {
  title: "TextBalloon",
  component: TextBalloon,
};
export const BlueBalloon = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <TextBalloon variant="blue">
      <Typography variant="body2" component="p" color="white">
        Cube houses (Dutch: Kubuswoningen) are a set of innovative houses built
        in Rotterdam in the Netherlands, designed by architect Piet Blom and
        based on
      </Typography>
    </TextBalloon>
  </div>
);

export const PinkBalloon = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <TextBalloon variant="pink">
      <Typography variant="body2" component="p" color="white">
        Cube houses (Dutch: Kubuswoningen) are a set of innovative houses built
        in Rotterdam in the Netherlands, designed by architect Piet Blom and
        based on
      </Typography>
    </TextBalloon>
  </div>
);
