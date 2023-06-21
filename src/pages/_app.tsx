import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";
import "@/locales/i18next";

export default function App({ Component, pageProps }: AppProps) {
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
