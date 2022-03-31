import React from "react";
import styled from "styled-components";

import Image from "./Image";
import Video from "./Video";

import { MediaProps } from "./Media.types";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Media = ({ type = "image", image, video, className }: MediaProps) => {
  return (
    <Wrapper className={className}>
      {type === "image" && <Image image={image} />}
      {type === "video" && (
        <Video url={video.url} playState={video.playState} />
      )}
    </Wrapper>
  );
};

export default Media;
