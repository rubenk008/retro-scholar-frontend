import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import clsx from "clsx";

import Image from "./Image";
import Video from "./Video";

import { MediaProps } from "./Media.types";

const Wrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;

  &.halftone {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      background: radial-gradient(4px 4px, black, white);
      background-size: 4px 4px;
      transform: rotate(45deg);
      mix-blend-mode: soft-light;
      opacity: 0.55;

      @media screen and (min-width: 1024px) {
        height: 400%;
      }
    }
  }
`;

const Media = ({
  type = "image",
  image,
  video,
  className,
  withHalftone = false,
  ...props
}: MediaProps) => {
  return (
    <Wrapper
      className={clsx(withHalftone ? "halftone" : "", className)}
      {...props}
    >
      {type === "image" && <Image image={image} />}
      {type === "video" && (
        <Video url={video.url} playState={video.playState} />
      )}
    </Wrapper>
  );
};

export default Media;
