import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../public/assets/wow-emoji.json";

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

  return (
    <div className="flex flex-col justify-center items-center p-8 text-primary sm:p-12 sm:items-start">
      <div className="flex items-center gap-4 mb-2 font-extrabold xs:text-lg">
        <LineSVG
          styles="hidden sm:block"
          color="#222"
          thickness="6px"
          length={50}
        />
        <h2>Harlon Garcia</h2>
      </div>
      <LineSVG
        styles="mb-2 sm:hidden"
        color="#222"
        thickness="6px"
        length={200}
      />
      <div className="flex mb-3">
        <h1 className="text-3xl font-black leading-8 xs:text-4xl sm:text-6xl">
          Software <br className="xs:hidden sm:block" />
          Developer
        </h1>
        <Lottie
          className="hidden sm:block sm:w-32 sm:h-32"
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
        <h2 className="text-center">ReactJS - Java - NodeJS</h2>
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
