import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import { useRouter } from "next/router";
import { createClient } from "../../prismicio";

import { getArticlesByCategory, getCategoryId } from "../../services/prismic";

import ArticleGrid from "../../components/layout/ArticleGrid";
import ArticleExpanded from "../../components/Article/ArticleExpanded";
import { StorySlide } from "../../slices";
import { ThemeContext } from "../../providers/ThemeProvider";

import SEO from "../../next-seo.config";
import { NextSeo } from "next-seo";
import Typography from "../../components/Typography";

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
    padding-top: 200px;
    max-width: 800px;

    & > h1 {
      margin-bottom: 32px;
    }
  }
`;

const TopicPage = ({
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
    data: { slices: [] },
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
      <TopicHeading>
        <Typography variant="h0" component="h1">
          {categoryName}
        </Typography>
        <Typography variant="body2alt" component="p">
          {categoryDesc}
        </Typography>
      </TopicHeading>

      <ArticleGrid articles={articles} asPath={router.asPath} />

      {!!router.query.article && (
        <ArticleExpanded
          id={router.query.article}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/topic/${currentTopic}`, `/topic/${currentTopic}`, {
              scroll: false,
              shallow: true,
            });
          }}
        >
          {expandedArticleContent.data.slices.length > 0 && (
            <StorySlide
              key={router.query.article.toString()}
              storyId={router.query.article.toString()}
              slice={expandedArticleContent.data.slices[0]}
              handleClosePage={(e) => {
                e.preventDefault();
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
        </ArticleExpanded>
      )}
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
        title: category.data.metaTitle,
        desc: category.data.metaDescription,
      },
      openGraph: !!category.data.socialCards
        ? category.data.socialCards[0]
        : { url: "", alt: "", socialCardTitle: "", socialCardDescription: "" },
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
