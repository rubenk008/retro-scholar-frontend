import { createClient } from "../prismicio";

const BASE_URL = "https://www.retroscholar.com";

function generateSiteMap(articles, topics) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     ${articles
       .map((article) => {
         const lastModified = new Date(
           article.last_publication_date
         ).toISOString();
         return `
       <url>
           <loc>${`${BASE_URL}/article/${article.uid}`}</loc>
          <lastmod>${lastModified}</lastmod>
       </url>
     `;
       })
       .join("")}
       ${topics
         .map((topic) => {
           const lastModified = new Date(
             topic.last_publication_date
           ).toISOString();
           return `
        <url>
            <loc>${`${BASE_URL}/topic/${topic.uid}`}</loc>
            <lastmod>${lastModified}</lastmod>
        </url>
      `;
         })
         .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const client = createClient();

  const articles = await client.getAllByType("story-page");
  const topics = await client.getAllByType("category-page");

  const sitemap = generateSiteMap(articles, topics);

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
