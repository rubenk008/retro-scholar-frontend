import React, { useEffect, useContext, useState } from "react";

import { useRouter } from "next/router";
import { createClient } from "../../prismicio";
import { getArticle } from "../../services/prismic";

import ArticleExpanded from "../../components/Article/ArticleExpanded";
import StorySlide from "../../slices/StorySlide";
import { ThemeContext } from "../../providers/ThemeProvider";

import SEO from "../../next-seo.config";
import { NextSeo } from "next-seo";

const ArticlePage = ({ meta, openGraph, article }) => {
  const router = useRouter();

  const { toggleTheme } = useContext(ThemeContext);

  const [categoryRoute, setCategoryRoute] = useState("");

  useEffect(() => {
    if (!!article.data.category) {
      setCategoryRoute(`/topic/${article.data.category.uid}`);
    }
  }, []);

  useEffect(() => {
    toggleTheme("light");
  }, []);

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
      <ArticleExpanded
        onClick={() => {
          router.push(categoryRoute, categoryRoute, {
            scroll: false,
            shallow: true,
          });
        }}
      >
        {article.data.slices.length > 0 && (
          <StorySlide
            slice={article.data.slices[0]}
            handleClosePage={() => {
              router.push(categoryRoute, categoryRoute, {
                scroll: false,
                shallow: true,
              });
            }}
          />
        )}
      </ArticleExpanded>
    </>
  );
};

export default ArticlePage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await getArticle(client, params.slug);

  return {
    props: {
      meta: {
        title: !!article.data.metaTitle ? article.data.metaTitle : "",
        desc: !!article.data.metaDescription
          ? article.data.metaDescription
          : "",
      },
      openGraph: !!article.data.socialCards
        ? article.data.socialCards[0]
        : { url: "", alt: "", socialCardTitle: "", socialCardDescription: "" },
      article,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const storyPages = await client.getAllByType("story-page");
  const longreadPages = await client.getAllByType("page");

  const pages = [...storyPages, ...longreadPages];

  return {
    paths: pages.map((article) => `/article/${article.uid}`),
    fallback: false,
  };
}
