import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
// import Link from "next/link";

import PageWrapper from "../components/layout/PageWrapper";
import { components } from "../slices";
import { CreateClientConfig } from "@prismicio/next";

const Home = ({ content, slices }) => {
  const router = useRouter();

  useEffect(() => {
    // console.log(content);
    console.log(slices);
  }, [slices]);

  return (
    <PageWrapper>
      <div></div>
      <SliceZone slices={slices} components={components} />
    </PageWrapper>
  );
};

export default Home;

const getArticles = async (client, articleIds) => {
  const articles = await client;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const content = await client.getAllByType("home-page");

  // client.getByIDs();

  const slices = [];

  for (let slice of content[0].data.slices) {
    if (slice.slice_type === "top_categories_section") {
      slices.push(slice);
    }
    if (slice.slice_type === "homepage_hero") {
      slices.push(slice);
    }
  }

  // const articles = await client.getByUIDs("story-page", ["", "", ""]);

  return {
    props: {
      content,
      slices,
    },
  };
}
