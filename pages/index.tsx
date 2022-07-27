import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
// import Link from "next/link";

import PageWrapper from "../components/layout/PageWrapper";
import { components } from "../slices";
import { CreateClientConfig } from "@prismicio/next";
import { Client } from "@prismicio/client";

const Home = ({ content, slices }) => {
  const router = useRouter();

  return (
    <PageWrapper>
      <SliceZone slices={slices} components={components} />
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

  const articles = [];

  for (const [index, item] of response.entries()) {
    let category = "";
    if (item.data.category.hasOwnProperty("id")) {
      category = await getCategory(client, item.data.category.id);
    }

    const article = {
      id: articleIds[index],
      category: category,
      title: item.data.title,
      thumbnail: item.data.slices[0].items[0].media,
    };

    articles.push(article);
  }

  return articles;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const content = await client.getAllByType("home-page");

  const slices = [];

  for (const slice of content[0].data.slices) {
    if (slice.slice_type === "top_categories_section") {
      slices.push(slice);
    }

    if (slice.slice_type === "single_highlighted_category_section") {
      const articleIds = [];

      for (const item of slice.items) {
        articleIds.push(item.article.id);
      }
      const articles = await getArticles(client, articleIds);

      const sliceCopy = { ...slice };
      delete sliceCopy["items"];

      const newSlice = { ...sliceCopy, items: articles };

      slices.push(newSlice);
    }

    if (slice.slice_type === "homepage_hero") {
      const articleIds = [];

      for (const item of slice.items) {
        articleIds.push(item.article.id);
      }

      const articles = await getArticles(client, articleIds);

      const sliceCopy = { ...slice };
      delete sliceCopy["items"];

      const newSlice = { ...sliceCopy, items: articles };

      slices.push(newSlice);
    }
  }

  return {
    props: {
      content,
      slices,
    },
  };
}
