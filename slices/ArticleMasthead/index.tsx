import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import IconButton from "../../components/IconButton/IconButton";
import Cross from "../../components/icons/Cross/Cross";
import Media from "../../components/Media/Media";
import { useWindowSize } from "../../hooks/useWindowSize";
import isMobile from "../../utils/isMobile";

const Section = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60rem;
  background: #fff;

  @media screen and (min-width: 1024px) {
    width: 100vw;
    margin: 0 auto;
  }
`;
const CloseButton = styled.div`
  position: absolute;
  z-index: 99999;
  top: calc(32 / 414 * 100vw);
  right: calc(32 / 414 * 100vw);

  @media screen and (min-width: 1024px) {
    top: 4.4rem;
    right: 4.4rem;
  }
`;

const MastheadImage = styled.div`
  width: 100%;
  height: 100%;
`;

const ArticleMasthead = ({ slice, handleClosePage = (e) => {} }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setIsMobileView(isMobile());
  }, [size]);

  const sliceMedia = slice.primary.media;

  const thumbnailMobile = sliceMedia.hasOwnProperty("mobile")
    ? sliceMedia.mobile
    : sliceMedia;

  const thumbnailDesktop = sliceMedia;
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
