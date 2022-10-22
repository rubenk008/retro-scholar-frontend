import React, { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { useRouter } from "next/router";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";

import PageWrapper from "../components/layout/PageWrapper";
import { components, StorySlide } from "../slices";
import { Client } from "@prismicio/client";
import ArticleExpanded from "../components/Article/ArticleExpanded";

const Home = ({ prefetchedArticles, slices }) => {
  const router = useRouter();
  const [prefetched, setPrefetced] = useState([]);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [expandedArticleContent, setExpandedArticleContent] = useState({
    data: { slices: [] },
  });

  useEffect(() => {
    console.log("EXPANDED CONTENT", expandedArticleContent);
  }, [expandedArticleContent]);

  // useEffect(() => {
  //   if (!overlayOpen) {
  //     enableBodyScroll(document);
  //   }
  //   if (overlayOpen) {
  //     disableBodyScroll(document);
  //   }
  // }, [overlayOpen]);

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
    setPrefetced(prefetchedArticles);
  }, [prefetchedArticles]);

  return (
    <PageWrapper>
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
            />
          )}
        </ArticleExpanded>
      )}
    </PageWrapper>
  );
};

export default Home;

const getCategory = async (client: Client, categoryId) => {
  const response = await (await client.getByID(categoryId)).data;

  const category = response.category_name;
  return category;
};

const getArticles = async (client: Client, articleIds) => {
  const response = await (await client.getByIDs(articleIds)).results;

  const prefetchedArticles = [];
  const articles = [];

  for (const [index, item] of response.entries()) {
    let category = "";
    if (item.data.category.hasOwnProperty("id")) {
      category = await getCategory(client, item.data.category.id);
    }

    prefetchedArticles.push(item);

    const article = {
      id: articleIds[index],
      category: category,
      title: item.data.title,
      thumbnail: item.data.slices[0].items[0].media,
    };

    articles.push(article);
  }

  return { articles: articles, prefetchedArticles: prefetchedArticles };
};

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
          articleIds.push(item.article.id);
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
          articleIds.push(item.article.id);
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
  };
}
