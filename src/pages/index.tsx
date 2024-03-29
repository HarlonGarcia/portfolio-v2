import React from "react";
import { Inter } from "next/font/google";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline/Timeline";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Harlon Garcia</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col overflow-hidden ${inter.className}`}
        >
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
