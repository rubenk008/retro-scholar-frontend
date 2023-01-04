import React, { useEffect, useState, useContext } from "react";

import { useRouter } from "next/router";
import { createClient } from "../../prismicio";

import {
  getMenu,
  getArticlesByCategory,
  getCategoryId,
} from "../../services/prismic";

import ArticleGrid from "../../components/layout/ArticleGrid";
import ArticleExpanded from "../../components/Article/ArticleExpanded";
import { StorySlide } from "../../slices";
import { ThemeContext } from "../../providers/ThemeProvider";

const TopicPage = ({ articles, prefetchedArticles }) => {
  const router = useRouter();
  const { toggleTheme } = useContext(ThemeContext);

  const [prefetched, setPrefetced] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [expandedArticleContent, setExpandedArticleContent] = useState({
    data: { slices: [] },
  });

  useEffect(() => {
    toggleTheme("light");
  }, []);

  useEffect(() => {
    if (!!router.query.article) {
      setOverlayOpen(true);
      const articleId = router.query.article.toString();
      for (const prefetchedItem of prefetched) {
        if (prefetchedItem.id === articleId) {
          setExpandedArticleContent(prefetchedItem);
        }
      }
    } else {
      setOverlayOpen(false);
    }
  }, [router]);

  useEffect(() => {
    console.log(prefetchedArticles);
    setPrefetced(prefetchedArticles);
  }, [prefetchedArticles]);

  return (
    <>
      <ArticleGrid articles={articles} asPath={router.asPath} />

      {!!router.query.article && (
        <ArticleExpanded
          id={router.query.article}
          onClick={(e) => {
            e.preventDefault();
            router.push("/topic/icons", "/topic/icons", {
              scroll: false,
              shallow: true,
            });
          }}
        >
          {expandedArticleContent.data.slices.length > 0 && (
            <StorySlide
              storyId={router.query.article.toString()}
              slice={expandedArticleContent.data.slices[0]}
              handleClosePage={(e) => {
                e.preventDefault();
                router.push("/topic/icons", "/topic/icons", {
                  scroll: false,
                  shallow: true,
                });
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

  const categoryID = await getCategoryId(client, params.slug);
  const data = await getArticlesByCategory(client, categoryID);

  const articles = data.articles;
  const prefetchedArticles = data.prefetchedArticles;

  return {
    props: {
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
