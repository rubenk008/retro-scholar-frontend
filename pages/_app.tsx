import { AppProps } from "next/app";

import { GoogleAnalytics } from "nextjs-google-analytics";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName, createClient } from "../prismicio";

import "../styles/globals.css";
import { getMenu } from "../services/prismic";
import PageWrapper from "../components/layout/PageWrapper";

import { ThemeProvider } from "../providers/ThemeProvider";
import Transition from "../components/layout/Transition";

interface WithNavProps extends AppProps {
  menu: any;
}

export default function App({ Component, pageProps, menu }: WithNavProps) {
  return (
    <ThemeProvider>
      <PrismicPreview repositoryName={repositoryName}>
        <GoogleAnalytics trackPageViews />
        <PageWrapper menu={menu}>
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </PageWrapper>
      </PrismicPreview>
    </ThemeProvider>
  );
}

App.getInitialProps = async (ctx) => {
  const client = createClient();

  const menu = await getMenu(client);
  return { menu };
};
