import React from "react";
import styled from "styled-components";

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

const ArticleCollapsed = ({ tags, title, media }: Props) => {
  return (
    <Card variant="elevated" size="small">
      <Media type={media.type} video={media.video} image={media.image} />
      <TagContainter>
        {tags.map((tag, index) => (
          <Chip key={index} Icon={getIcon(tag)} variant="filled">
            {tag}
          </Chip>
        ))}
      </TagContainter>
      <ArticleHeading variant="small">{title}</ArticleHeading>
    </Card>
  );
};

export default ArticleCollapsed;
