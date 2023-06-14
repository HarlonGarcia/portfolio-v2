import { Inter } from "next/font/google";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline/Timeline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col overflow-hidden ${inter.className}`}
    >
      <Hero />
      <About />
      <Timeline />
    </main>
  );
}
