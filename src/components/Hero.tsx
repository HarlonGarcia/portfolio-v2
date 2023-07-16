import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../public/assets/wow-emoji.json";
import Typed from "typed.js";
import { MdCommit } from "react-icons/md";

const LineSVG = ({
  styles = "block",
  color = "black",
  thickness = "1px",
  length = 100,
}) => {
  return (
    <svg
      className={styles}
      width={length}
      height={thickness}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="0"
        x2={length}
        y2="0"
        stroke={color}
        strokeWidth={thickness}
      />
    </svg>
  );
};

export default function Hero() {
  const animationRef = React.useRef<LottieRefCurrentProps>(null);
  const el = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    const typed = new Typed(el.current || "", {
      strings: ["Fullstack", "Backend", "Frontend", "Software", "Web"],
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
    <div className="relative flex flex-col justify-center items-center p-8 text-primary xs:p-10 sm:p-14 xs:items-start md:p-20">
      <div className="flex items-center gap-4 mb-2 text-lg font-extrabold sm:text-xl">
        <LineSVG
          styles="hidden xs:block"
          color="#222"
          thickness="6px"
          length={50}
        />
        <h2>Harlon Garcia</h2>
      </div>
      <LineSVG
        styles="mb-2 xs:mb-4 xs:hidden"
        color="#222"
        thickness="6px"
        length={200}
      />
      <div className="flex mb-3 xs:mb-5">
        <ul
          className="text-primary-dark text-center text-4xl font-semibold leading-8 xs:text-left xs:text-5xl sm:text-6xl
        md:text-7xl"
        >
          <li ref={el} className="inline-block"></li>
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
      <LineSVG
        styles="mb-2 sm:hidden"
        color="#222"
        thickness="6px"
        length={200}
      />
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
        <LineSVG
          styles="hidden sm:block"
          color="#222"
          thickness="6px"
          length={150}
        />
      </div>
    </div>
  );
}
