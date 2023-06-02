import Link from "next/link";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import { GoogleAnalytics } from "nextjs-google-analytics";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName, createClient } from "../prismicio";
import { useRouter } from "next/router";

import "../styles/globals.css";
import { getMenu } from "../services/prismic";
import PageWrapper from "../components/layout/PageWrapper";

import { ThemeProvider } from "../providers/ThemeProvider";
import { useEffect } from "react";

interface WithNavProps extends AppProps {
  menu: any;
}

export default function App({
  Component,
  pageProps,
  menu,
  router,
}: WithNavProps) {
  return (
    <ThemeProvider>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <GoogleAnalytics trackPageViews />
          <PageWrapper menu={menu}>
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </PageWrapper>
        </PrismicPreview>
      </PrismicProvider>
    </ThemeProvider>
  );
}

App.getInitialProps = async (ctx) => {
  const client = createClient();

  const menu = await getMenu(client);
  return { menu };
};
