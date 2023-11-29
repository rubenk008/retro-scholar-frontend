import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import OneColumnText from "../../components/layout/OneColumnText";
import { PrismicRichText } from "@prismicio/react";
import Typography from "../../components/Typography/Typography";

export type TextRowProps = SliceComponentProps<any>;

const TextRow = ({ slice }: TextRowProps): JSX.Element => {
  return (
    <OneColumnText>
      <PrismicRichText
        field={slice.primary.body}
        components={{
          heading1: ({ children }) => (
            <Typography variant="h3" component="h1">
              {children}
            </Typography>
          ),
          heading2: ({ children }) => (
            <Typography variant="h4" component="h2">
              {children}
            </Typography>
          ),
          heading3: ({ children }) => (
            <Typography variant="h5" component="h3">
              {children}
            </Typography>
          ),
          paragraph: ({ children }) => (
            <Typography variant="body1" component="p">
              {children}
            </Typography>
          ),
          hyperlink: ({ children }) => (
            <Typography variant="body1" component="a">
              {children}
            </Typography>
          ),
        }}
      />
    </OneColumnText>
  );
};

export default TextRow;
