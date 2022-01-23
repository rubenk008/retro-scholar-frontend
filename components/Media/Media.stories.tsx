import React from "react";
import Media from "./index";

export default {
  title: "Media",
  component: Media,
};

const image = {
  url:
    "https://i.picsum.photos/id/823/200/300.jpg?hmac=Sv69FIuXkj79IVp4uZ1YpgRHDGP0jadf5nSiTx1xSoo",
  alt: "testing image",
};

const video = {
  url: "https://www.w3schools.com/howto/rain.mp4",
  playState: true,
};

export const Image = () => (
  <div style={{ height: "200px", width: "200px" }}>
    <Media type="image" image={image} />
  </div>
);

export const Video = () => (
  <div style={{ height: "200px", width: "300px" }}>
    <Media type="video" video={video} />
  </div>
);
