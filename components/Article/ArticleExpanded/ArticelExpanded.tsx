import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Media from "../../Media";

const Wrapper = styled(motion.div)`
  width: 800px;
  height: 800px;
  position: relative;
  display: block;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  right: 0;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  padding: 40px 0;
`;

const ArticleExpanded = ({ id, media }) => {
  return (
    <Wrapper>
      <Media
        type={media.type}
        video={media.video}
        image={media.image}
        layoutId={`card-media-${id}`}
      />
    </Wrapper>
  );
};

export default ArticleExpanded;
