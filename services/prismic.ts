import { Client, predicate } from "@prismicio/client";

export const getMenu = async (client: Client) => {
  const response = await client.getSingle("menu");
  const data = response.data;

  const title = data.title ? data.title : "";

  const links = [];

  for (const link of data.links) {
    const item = {
      name: link.menuItemName,
      desc: link.menuItemDesc,
      href: !!link.menuItemLink.slug ? link.menuItemLink.slug : "",
      opacity: 1,
      active: false,
    };

    links.push(item);
  }

  const menu = {
    title: title,
    links: links,
  };
  return menu;
};

export const getCategoryId = async (client: Client, categoryUID) => {
  const response = await client.getByUID("category-page", categoryUID);

  const category = response;
  return category;
};

export const getCategory = async (client: Client, categoryId) => {
  const response = await (await client.getByID(categoryId)).data;

  const category = response.category_name;
  return category;
};

export const getArticle = async (client: Client, articleUID) => {
  const response = await client.getByUID("story-page", articleUID);

  const article = response;
  return article;
};

export const getArticles = async (client: Client, articleIds) => {
  const response = await client.getAllByUIDs("story-page", articleIds);

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
      uid: articleIds[index],
      category: category,
      title: item.data.title,
      thumbnail: item.data.slices[0].items[0].media,
      thumbnailDeskPercentageFromCenter:
        item.data.slices[0].items[0].thumbnailPrecentageFromCenter,
    };

    articles.push(article);
  }

  return { articles: articles, prefetchedArticles: prefetchedArticles };
};

export const getArticlesByCategory = async (client: Client, categoryID) => {
  const response = await client.getAllByType("story-page", {
    predicates: [predicate.at("my.story-page.category", categoryID)],
  });

  const prefetchedArticles = [];
  const articles = [];

  for (const [index, item] of response.entries()) {
    let category = "";
    if (item.data.category.hasOwnProperty("id")) {
      category = await getCategory(client, item.data.category.id);
    }

    prefetchedArticles.push(item);

    const article = {
      id: item.id,
      uid: item.uid,
      category: category,
      title: item.data.title,
      thumbnail: item.data.slices[0].items[0].media,
      thumbnailDeskPercentageFromCenter:
        item.data.slices[0].items[0].thumbnailPrecentageFromCenter,
    };

    articles.push(article);
  }

  return { articles, prefetchedArticles };
};
