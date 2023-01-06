import React, { useEffect, useState, useContext } from "react";

import { useRouter } from "next/router";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";

import { components, StorySlide } from "../slices";
import ArticleExpanded from "../components/Article/ArticleExpanded";

import { getMenu, getArticles } from "../services/prismic";
import { ThemeContext } from "../providers/ThemeProvider";

const Home = ({ prefetchedArticles, slices }) => {
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
      <SliceZone slices={slices} components={components} />

      {!!router.query.article && (
        <ArticleExpanded
          id={router.query.article}
          onClick={(e) => {
            e.preventDefault();
            router.push("/", "/", { scroll: false, shallow: true });
          }}
        >
          {expandedArticleContent.data.slices.length > 0 && (
            <StorySlide
              storyId={router.query.article.toString()}
              slice={expandedArticleContent.data.slices[0]}
              handleClosePage={(e) => {
                e.preventDefault();
                router.push("/", "/", { scroll: false, shallow: true });
              }}
            />
          )}
        </ArticleExpanded>
      )}
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
      prefetchedArticles,
      slices,
    },
    revalidate: 10,
  };
}
