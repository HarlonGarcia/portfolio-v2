import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { MdCommit } from "react-icons/md";

import animationData from "../../public/assets/wow-emoji.json";
import Line from "./Shared/Line";

export default function Hero() {
  const animationRef = React.useRef<LottieRefCurrentProps>(null);
  const typedEl = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "&#8205;Fullstack",
        "&#8205;Backend",
        "&#8205;Frontend",
        "&#8205;Software",
        "&#8205;Web",
      ],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 50,
      cursorChar: "/",
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      className="relative flex flex-col justify-center items-center p-8 text-primary xs:p-10 sm:p-14 xs:items-start md:p-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-2 text-lg font-extrabold sm:text-xl">
        <Line styles="hidden xs:block" thickness="6px" length={50} />
        <h2>Harlon Garcia</h2>
      </div>
      <Line styles="mb-2 xs:mb-4 xs:hidden" thickness="6px" length={200} />
      <div className="flex mb-3 xs:mb-5">
        <ul
          className="text-center text-4xl font-semibold leading-8 xs:text-left xs:text-5xl sm:text-6xl
        md:text-7xl"
        >
          <li ref={typedEl} className="inline-block"></li>
          <li className="font-black">Developer</li>
        </ul>
        <Lottie
          className="absolute top-10 left-64 h-32 w-32 hidden xs:block sm:left-80 sm:h-48 sm:w-48 md:top-14 md:left-96"
          onComplete={() => {
            animationRef.current?.goToAndPlay(60, true);
          }}
          lottieRef={animationRef}
          loop={false}
          animationData={animationData}
        />
      </div>
      <Line styles="mb-2 sm:hidden" thickness="6px" length={200} />
      <div className="flex items-center gap-4 font-extrabold text-sm xs:text-lg">
        <ul className="flex items-center gap-1 text-center">
          <li>ReactJS</li>
          <li>
            <MdCommit className="h-5 w-5 sm:h-6 sm:w-6" />
          </li>
          <li>Java</li>
          <li>
            <MdCommit className="h-5 w-5 sm:h-6 sm:w-6" />
          </li>
          <li>NodeJS</li>
        </ul>
        <Line styles="hidden sm:block" thickness="6px" length={150} />
      </div>
    </motion.div>
  );
}
