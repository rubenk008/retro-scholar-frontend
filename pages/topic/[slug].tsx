import React from "react";

import { createClient } from "../../prismicio";

import {
  getMenu,
  getArticlesByCategory,
  getCategoryId,
} from "../../services/prismic";
import PageWrapper from "../../components/layout/PageWrapper";
import ArticleGrid from "../../components/layout/ArticleGrid";

const TopicPage = ({ menu, articles }) => {
  return (
    <>
      <PageWrapper menu={menu} variant="light">
        <ArticleGrid articles={articles} />
      </PageWrapper>
    </>
  );
};

export default TopicPage;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const menu = await getMenu(client);
  const categoryID = await getCategoryId(client, params.slug);
  const articles = await getArticlesByCategory(client, categoryID);

  return {
    props: {
      menu,
      articles,
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
