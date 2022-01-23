import React from "react";
import Chip from "./index";

import Story from "../icons/Story";

export default {
  title: "Chip",
  component: Chip,
};

export const FilledSmall = () => <Chip variant="filled">story</Chip>;
export const FilledSmallWithIcon = () => (
  <Chip Icon={<Story />} variant="filled">
    story
  </Chip>
);

export const FilledMedium = () => (
  <Chip variant="filled" size="medium">
    story
  </Chip>
);
export const OutlinedSmall = () => <Chip variant="outlined">people</Chip>;
export const OutlinedMedium = () => (
  <Chip variant="outlined" size="medium">
    people
  </Chip>
);
