import React from "react";
import styled from "styled-components";
import { motion, MotionProps } from "framer-motion";

import Props from "./ArticleCollapsed.types";

import Card from "../../Card";
import Media from "../../Media";
import Chip from "../../Chip";
import ArticleHeading from "../ArticleHeading";

import Story from "../../icons/Story";

const TagContainter = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  row-gap: 4px;
  top: 12px;
  left: 12px;
  right: 12px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    top: 2rem;
    left: 2rem;
    right: 2rem;
  }
`;

const getIcon = (value) => {
  switch (value) {
    case "story":
      return <Story />;

    case "longread":
      return <Story />;
    default:
      break;
  }
};

interface MediaContainerProps extends MotionProps {
  thumbnailDesktopPrecentageFromCenter?: string;
}

const MediaContainer = styled(motion.div)<MediaContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: auto;
  width: 100%;
  aspect-ratio: 0.56 / 1;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const ArticleCollapsed = ({
  id,
  tags,
  title,
  media,
  variant = "small",
  withMargin = false,
  onClick,
}: Props) => {
  return (
    <Card
      variant="elevated"
      size={variant}
      onClick={onClick}
      cardArticleId={id}
    >
      <MediaContainer
        layoutId={`card-media-${id}`}
        initial={{ x: 0, y: 0 }}
        animate={{ x: 0, y: 0 }}
      >
        <Media type={media.type} video={media.video} image={media.image} />
      </MediaContainer>
      <TagContainter>
        {tags.map((tag, index) => (
          <Chip key={index} Icon={getIcon(tag)} variant="filled">
            {tag}
          </Chip>
        ))}
      </TagContainter>

      <ArticleHeading variant={variant === "small" ? "small" : "regular"}>
        {title}
      </ArticleHeading>
    </Card>
  );
};

export default ArticleCollapsed;
