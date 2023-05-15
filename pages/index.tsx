// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import { clearAllBodyScrollLocks } from "body-scroll-lock";

import { useRouter } from "next/router";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";

import SEO from "../next-seo.config";

import { components } from "../slices";
import StorySlide from "../slices/StorySlide";
import ArticleExpanded from "../components/Article/ArticleExpanded";
import Longread from "../components/Longread/Longread";
import ArticleMasthead from "../components/layout/ArticleMasthead/ArticleMasthead";

import { getArticles } from "../services/prismic";
import { ThemeContext } from "../providers/ThemeProvider";
import { NextSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

const Home = ({ meta, openGraph, prefetchedArticles, slices }) => {
  const router = useRouter();
  const { toggleTheme } = useContext(ThemeContext);

  const [prefetched, setPrefetced] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [expandedArticleContent, setExpandedArticleContent] = useState({
    data: { slices: [] },
  });

  useEffect(() => {
    toggleTheme("dark");
  }, []);

  useEffect(() => {
    if (router.query.hasOwnProperty("article")) {
      setOverlayOpen(true);
      const articleId = router.query.article.toString();
      for (const prefetchedItem of prefetched) {
        if (prefetchedItem.uid === articleId) {
          setExpandedArticleContent(prefetchedItem);
        }
      }
    } else {
      setOverlayOpen(false);
    }
  }, [router]);

  useEffect(() => {
    setPrefetced(prefetchedArticles);
  }, [prefetchedArticles]);

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.desc}
        openGraph={{
          url: SEO.baseUrl,
          title: openGraph.socialCardTitle,
          description: openGraph.socialCardDescription,
          siteName: SEO.siteName,
          defaultImageHeight: 630,
          defaultImageWidth: 1200,
          images: [
            {
              url: !!openGraph.socialCardImage.url
                ? openGraph.socialCardImage.url
                : "",
              alt: !!openGraph.socialCardImage.alt
                ? openGraph.socialCardImage.alt
                : "",
              type: "image/jpeg",
            },
          ],
        }}
      />

      <SliceZone slices={slices} components={components} />
      <AnimatePresence initial={false}>
        {overlayOpen && (
          <ArticleExpanded
            onClick={() => {
              router.push("/", "/", { scroll: false, shallow: true });
            }}
          >
            {expandedArticleContent.type === "story-page" && (
              <StorySlide
                slice={expandedArticleContent.data.slices[0]}
                handleClosePage={() => {
                  setOverlayOpen(false);
                  clearAllBodyScrollLocks();
                  router.push("/", "/", { scroll: false, shallow: true });
                }}
              />
            )}
            {expandedArticleContent.type === "page" && (
              <Longread
                masthead={
                  <ArticleMasthead
                    title={expandedArticleContent.data.title}
                    media={expandedArticleContent.data.main_media}
                    category={expandedArticleContent.category[0].text}
                    introduction={expandedArticleContent.data.introduction}
                    firstParagraph={expandedArticleContent.data.firstParagraph}
                    articleUrl=""
                    handleClosePage={() => {
                      setOverlayOpen(false);
                      clearAllBodyScrollLocks();
                      router.push("/", "/", { scroll: false, shallow: true });
                    }}
                  />
                }
                slicezone={
                  <SliceZone
                    slices={expandedArticleContent.data.slices}
                    components={components}
                  />
                }
              />
            )}
          </ArticleExpanded>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const content = await client.getAllByType("home-page");

  let prefetchedArticles = [];

  const slices = [];

  for (const slice of content[0].data.slices) {
    if (slice.slice_type === "top_categories_section") {
      slices.push(slice);
    }

    if (slice.slice_type === "single_highlighted_category_section") {
      const articleIds = [];
      for (const item of slice.items) {
        if (item !== undefined) {
          articleIds.push(item.article.uid);
        }
      }
      const data = await getArticles(client, articleIds);
      const sliceCopy = { ...slice };
      delete sliceCopy["items"];
      const newSlice = { ...sliceCopy, items: data.articles };
      prefetchedArticles = [...prefetchedArticles, ...data.prefetchedArticles];
      slices.push(newSlice);
    }

    if (slice.slice_type === "homepage_hero") {
      const articleIds = [];
      for (const item of slice.items) {
        if (item !== undefined) {
          articleIds.push(item.article.uid);
        }
      }
      const data = await getArticles(client, articleIds);
      const sliceCopy = { ...slice };
      delete sliceCopy["items"];
      const newSlice = { ...sliceCopy, items: data.articles };
      prefetchedArticles = [...prefetchedArticles, ...data.prefetchedArticles];
      slices.push(newSlice);
    }
  }

  return {
    props: {
      meta: {
        title: !!content[0].data.metaTitle ? content[0].data.metaTitle : "",
        desc: !!content[0].data.metaDescription
          ? content[0].data.metaDescription
          : "",
      },
      openGraph: !!content[0].data.socialCards
        ? content[0].data.socialCards[0]
        : { url: "", alt: "", socialCardTitle: "", socialCardDescription: "" },
      prefetchedArticles,
      slices,
    },
    revalidate: 10,
  };
}
