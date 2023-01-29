import React, { useEffect } from "react";
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
    top: 20px;
    left: 20px;
    right: 20px;
  }
`;

const getIcon = (value) => {
  switch (value) {
    case "story":
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

  @media screen and (min-width: 1024px) {
    left: calc(
      -80% + ${(props) => props.thumbnailDesktopPrecentageFromCenter}%
    );
    width: auto;
    height: 100%;
    aspect-ratio: 25 / 14;
  }
`;

const ArticleCollapsed = ({
  id,
  tags,
  title,
  media,
  variant = "small",
  withMargin = false,
  thumbnailDesktopPrecentageFromCenter = "0",
  onClick,
}: Props) => {
  return (
    <Card
      variant="elevated"
      size={variant}
      withMargin={withMargin}
      onClick={onClick}
      cardArticleId={id}
    >
      <MediaContainer
        layoutId={`card-media-${id}`}
        thumbnailDesktopPrecentageFromCenter={
          thumbnailDesktopPrecentageFromCenter
        }
      >
        <Media
          type={media.type}
          video={media.video}
          image={media.image}
          withHalftone
        />
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
