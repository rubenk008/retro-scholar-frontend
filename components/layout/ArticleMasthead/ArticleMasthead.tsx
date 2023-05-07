import React, { useState, useEffect } from "react";

import styled from "styled-components";
import IconButton from "../../IconButton";
import Cross from "../../icons/Cross";
import Media from "../../Media";
import { useWindowSize } from "../../../hooks/useWindowSize";
import isMobile from "../../../utils/isMobile";

import { ArticleMastheadProps } from "./ArticleMasthead.types";
import { RichText } from "prismic-reactjs";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: #fff;

  @media screen and (min-width: 1024px) {
    width: 100vw;
    margin: 0 auto;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  z-index: 99999;
  top: 3.2rem;
  right: 3.2rem;

  @media screen and (min-width: 1024px) {
    top: 4.4rem;
    right: 4.4rem;
  }
`;

const MastheadImage = styled.div`
  width: 100%;
  height: 60rem;
`;

const ArticleMasthead = ({
  title,
  category,
  introduction,
  firstParagraph,
  media,
  handleClosePage = (e) => {},
}: ArticleMastheadProps) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

  const thumbnailMobile = media.hasOwnProperty("mobile") ? media.mobile : media;

  const thumbnailDesktop = media;

  return (
    <Section>
      <MastheadImage>
        <Media
          type="image"
          image={
            isMobileView
              ? {
                  url: thumbnailMobile.url,
                  alt: thumbnailMobile.alt,
                }
              : {
                  url: thumbnailDesktop.url,
                  alt: thumbnailDesktop.alt,
                }
          }
          withHalftone
        />
      </MastheadImage>
      <CloseButton>
        <IconButton
          icon={<Cross color="#283086" height="4rem" width="4rem" />}
          onClick={(e) => handleClosePage(e)}
        />
      </CloseButton>
    </Section>
  );
};

export default ArticleMasthead;
