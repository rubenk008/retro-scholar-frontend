import React from "react";

import { MediaProps } from "../../Media/Media.types";

export default interface ArticleCollapsedProps {
  id?: string;
  tags?: Array<String>;
  title?: string;
  media?: MediaProps;
  variant?: string;
  withMargin?: boolean;
  onClick?: () => void;
}
