import React from "react";
import Card from "./index";

import Media from "../Media";

const image = {
  url:
    "https://i.picsum.photos/id/823/200/300.jpg?hmac=Sv69FIuXkj79IVp4uZ1YpgRHDGP0jadf5nSiTx1xSoo",
  alt: "testing image",
};

const video = {
  url: "https://www.w3schools.com/howto/rain.mp4",
  playState: true,
};

export default {
  title: "Card",
  component: Card,
};

const CardStory = ({ ...args }) => (
  <Card {...args.card}>
    <Media {...args.media} />
  </Card>
);

export const ElevatedCardWithImageSmall = () => (
  <Card variant="elevated" size="small">
    <Media type="image" image={image} />
  </Card>
);

export const ElevatedCardWithImage = CardStory.bind({
  variant: "elevated",
});

ElevatedCardWithImage.args = {
  media: {
    type: "image",
    image: image,
  },
};

export const ElevatedCardWithVideo = CardStory.bind({
  card: {
    variant: "elevated",
  },
});

ElevatedCardWithVideo.args = {
  media: {
    type: "video",
    video: video,
  },
};

export const OutlinedCardWithImage = () => (
  <Card variant="outlined">
    <Media type="image" image={image} />
  </Card>
);

export const OutlinedCardWithVideo = () => (
  <Card variant="outlined">
    <Media type="video" video={video} />
  </Card>
);

export const OutlinedCardWithImageAndShadow = () => (
  <Card variant="outlined" hasDropShadow={true}>
    <Media type="image" image={image} />
  </Card>
);

export const QuizCard = () => <Card variant="quiz"></Card>;
