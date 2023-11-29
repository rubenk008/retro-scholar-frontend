import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import OneColumnMedia from "../../components/layout/OneColumnMedia";
import TwoColumnMedia from "../../components/layout/TwoColumnMedia";
import ThreeColumnMedia from "../../components/layout/ThreeColumnMedia";

/**
 * Props for `MediaColumns`.
 */
export type MediaColumnsProps = SliceComponentProps<any>;

/**
 * Component for "MediaColumns" Slices.
 */
const MediaColumns = ({ slice }: MediaColumnsProps): JSX.Element => {
  return (
    <>
      {slice.items.length === 1 && (
        <OneColumnMedia image={slice.items[0].media} />
      )}
      {slice.items.length === 2 && <TwoColumnMedia media={slice.items} />}

      {slice.items.length === 3 && <ThreeColumnMedia media={slice.items} />}
    </>
  );
};

export default MediaColumns;
