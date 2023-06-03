// @ts-nocheck

import React, { useEffect, useState, useContext } from "react";
import { clearAllBodyScrollLocks } from "body-scroll-lock-upgrade";
import styled from "styled-components";

import { useRouter } from "next/router";
import { createClient } from "../../prismicio";

import { getArticlesByCategory, getCategoryId } from "../../services/prismic";

import ArticleGrid from "../../components/layout/ArticleGrid";
import ArticleExpanded from "../../components/Article/ArticleExpanded";
import StorySlide from "../../slices/StorySlide";
import { ThemeContext } from "../../providers/ThemeProvider";

import SEO from "../../next-seo.config";
import { NextSeo } from "next-seo";
import Typography from "../../components/Typography";
import { AnimatePresence } from "framer-motion";
import Longread from "../../components/Longread/Longread";
import ArticleMasthead from "../../components/layout/ArticleMasthead/ArticleMasthead";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

const TopicHeading = styled.div`
  padding-top: 160px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;

  & > h1 {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    padding-top: 20rem;
    max-width: 80rem;

    & > h1 {
      margin-bottom: 3.2rem;
    }
  }
`;

const TopicPage = ({
  data,
  categoryName,
  categoryDesc,
  meta,
  openGraph,
  articles,
  prefetchedArticles,
}) => {
  const router = useRouter();
  const { toggleTheme } = useContext(ThemeContext);

  const [prefetched, setPrefetced] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [expandedArticleContent, setExpandedArticleContent] = useState({
    type: "",
    category: [],

    data: {
      title: "",
      main_media: "",
      slices: [],
      introduction: [],
      firstParagraph: [],
    },
  });

  useEffect(() => {
    setCurrentTopic(router.query.slug.toString());
  }, [router]);

  const [currentTopic, setCurrentTopic] = useState("");

  useEffect(() => {
    toggleTheme("light");
  }, []);

  useEffect(() => {
    if (!!router.query.article) {
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
          type: "website",
          url: `${SEO.baseUrl}/topic/${currentTopic}`,
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
      <TopicHeading>
        <Typography variant="h0" component="h1">
          {categoryName}
        </Typography>
        <Typography variant="body2alt" component="p">
          {categoryDesc}
        </Typography>
      </TopicHeading>

      <ArticleGrid articles={articles} asPath={router.asPath} />
      <AnimatePresence initial={false}>
        {overlayOpen && (
          <ArticleExpanded
            onClick={() => {
              router.push(`/topic/${currentTopic}`, `/topic/${currentTopic}`, {
                scroll: false,
                shallow: true,
              });
            }}
          >
            {expandedArticleContent.type === "story-page" && (
              <StorySlide
                key={router.query.article.toString()}
                slice={expandedArticleContent.data.slices[0]}
                handleClosePage={() => {
                  setOverlayOpen(false);
                  clearAllBodyScrollLocks();
                  router.push(
                    `/topic/${currentTopic}`,
                    `/topic/${currentTopic}`,
                    {
                      scroll: false,
                      shallow: true,
                    }
                  );
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
                    firstParagraph={expandedArticleContent.data.first_paragraph}
                    articleUrl=""
                    handleClosePage={() => {
                      setOverlayOpen(false);
                      clearAllBodyScrollLocks();
                      router.push(
                        `/topic/${currentTopic}`,
                        `/topic/${currentTopic}`,
                        {
                          scroll: false,
                          shallow: true,
                        }
                      );
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

export default TopicPage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const category = await getCategoryId(client, params.slug);
  const data = await getArticlesByCategory(client, category.id);

  const articles = data.articles;
  const prefetchedArticles = data.prefetchedArticles;

  return {
    props: {
      data: category,
      categoryName: category.data.category_name[0].text,
      categoryDesc: category.data.category_desc,
      meta: {
        title: category.data.metaTitle ? category.data.metaTitle : "",
        desc: category.data.metaDescription
          ? category.data.metaDescription
          : "",
      },
      openGraph: !!category.data.socialCards
        ? category.data.socialCards[0]
        : {
            url: "",
            alt: "",
            socialCardImage: "",
            socialCardDescription: "",
          },
      articles,
      prefetchedArticles,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("category-page");

  return {
    paths: pages.map((topic) => `/topic/${topic.uid}`),
    fallback: false,
  };
}
