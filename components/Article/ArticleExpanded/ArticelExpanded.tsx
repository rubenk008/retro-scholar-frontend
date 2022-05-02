import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Media from "../../Media";

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 1;
  padding: 48px 0;
  max-height: 100vh;
  overflow-y: scroll;
`;

const ArticleContent = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 84vw;
  height: 100%;
  margin: 0 auto;
  background: #fff;
`;

const HeaderImage = styled.div`
  height: 600px;
  width: 100%;
`;

const ArticleExpanded = ({ id, media, onClick }) => {
  return (
    <>
      <Overlay
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      ></Overlay>

      <Wrapper onClick={onClick}>
        <ArticleContent layoutId={`card-container-${id}`}>
          <HeaderImage>
            <Media
              type={media.type}
              video={media.video}
              image={media.image}
              layoutId={`card-media-${id}`}
            />
          </HeaderImage>
          <motion.div style={{ width: "100%", height: "800px" }}></motion.div>
        </ArticleContent>
      </Wrapper>
    </>
  );
};

export default ArticleExpanded;
