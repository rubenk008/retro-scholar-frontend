import { MediaProps } from "../../Media/Media.types";

export default interface ArticleCollapsedProps {
  id?: number | string;
  tags?: Array<String>;
  title?: string;
  media?: MediaProps;
  variant?: string;
  withMargin?: boolean;
  onClick?: () => void;
}
