import React, { useEffect, useContext, useState } from "react";

import { useRouter } from "next/router";
import { createClient } from "../../prismicio";
import { getArticle } from "../../services/prismic";

import ArticleExpanded from "../../components/Article/ArticleExpanded";
import { StorySlide } from "../../slices";
import { ThemeContext } from "../../providers/ThemeProvider";

const ArticlePage = ({ article }) => {
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
    <ArticleExpanded
      id={article.id}
      onClick={(e) => {
        e.preventDefault();
        router.push(categoryRoute, categoryRoute, {
          scroll: false,
          shallow: true,
        });
      }}
    >
      {article.data.slices.length > 0 && (
        <StorySlide
          storyId={article.id}
          slice={article.data.slices[0]}
          handleClosePage={(e) => {
            e.preventDefault();
            router.push(categoryRoute, categoryRoute, {
              scroll: false,
              shallow: true,
            });
          }}
        />
      )}
    </ArticleExpanded>
  );
};

export default ArticlePage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await getArticle(client, params.slug);

  return {
    props: {
      article,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("story-page");

  return {
    paths: pages.map((article) => `/article/${article.uid}`),
    fallback: false,
  };
}
