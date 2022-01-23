import React from "react";

import { MediaProps } from "../../Media/Media.types";

export default interface ArticleCollapsedProps {
  tags?: Array<String>;
  title?: string;
  media?: MediaProps;
}
