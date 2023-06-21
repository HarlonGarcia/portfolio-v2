import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { themeChange } from "theme-change";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/locales/i18next";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Head>
        <title>Harlon Garcia</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
