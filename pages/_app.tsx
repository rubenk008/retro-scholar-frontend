import Link from "next/link";
import { AppProps } from "next/app";

import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName, createClient } from "../prismicio";

import "../styles/globals.css";
import { getMenu } from "../services/prismic";
import PageWrapper from "../components/layout/PageWrapper";
import { ThemeProvider } from "../providers/ThemeProvider";
import { useEffect } from "react";

interface WithNavProps extends AppProps {
  menu: any;
}

export default function App({ Component, pageProps, menu }: WithNavProps) {
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
          <PageWrapper menu={menu}>
            <Component {...pageProps} />
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
