import { RTNode } from "@prismicio/types";

export interface ArticleMastheadProps {
  title: string;
  category: string;
  media: any;
  introduction: any;
  firstParagraph: any;
  articleUrl: string;
  handleClosePage: (e: any) => void;
}
