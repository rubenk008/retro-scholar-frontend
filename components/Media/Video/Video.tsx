import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

import { VideoProps } from "./Video.types";

const VideoRoot = styled(ReactPlayer)`
  border: 0;
  position: absolute;
  right: 0;
  bottom: 0;

  > video {
    object-fit: cover;
  }
`;

const Video = ({ url, playState }: VideoProps) => {
  return (
    <VideoRoot
      width="100%"
      height="100%"
      url={url}
      playing={playState}
      volume={0}
      loop
      playsinline
    />
  );
};

export default Video;
