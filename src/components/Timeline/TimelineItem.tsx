import React from "react";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLink } from "react-icons/fa";

import { Project } from "@/types/Project";
interface TimelineItemProps {
  data: Project;
  translateValue: number;
}

export default function TimelineItem({
  data,
  translateValue,
}: TimelineItemProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const { i18n } = useTranslation();

  return (
    <div
      ref={ref}
      className="group relative flex justify-end pr-[30px] my-2 w-1/2 odd:self-end odd:justify-start odd:pl-[30px] odd:pr-0"
    >
      <div
        className="absolute top-[calc(50%_-_10px)] -right-2.5 w-5 h-5 z-20 
    p-1 bg-neutral border-highlight-dark border-2 rounded-full group-odd:right-auto group-odd:-left-2.5"
      ></div>
      <div
        className="card-body card card-compact bg-neutral shadow-to-r shadow-slate-900/10 transition-all duration-500 ease-in-out
        after:content-[' '] after:absolute after:-right-2 after:top-[calc(50%_-_8px)] after:w-4 
        after:h-4 after:rotate-45 after:bg-neutral hover:shadow-slate-900/20 group-odd:shadow-to-l group-odd:hover:shadow-slate-900/20 group-odd:after:right-auto
        group-odd:after:-left-2"
        style={{
          transform: isInView ? "none" : `translateX(${translateValue}px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h2 className="card-title mb-0 text-primary font-black">
          {data.title}
        </h2>
        <p className="mb-2 text-primary font-semibold">
          {i18n.language === "ptBR" ? data.description.pt : data.description.en}
        </p>
        <div className="card-actions justify-between items-center">
          <div className="hidden md:block">
            {data.tags.map((tag, index) => (
              <span
                key={tag + index.toString()}
                className="py-0.5 px-2 mr-2 text-xs text-neutral-blue bg-primary-dark rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-1 md:gap-2">
            {data.links?.github ? (
              <button className="flex justify-center items-center w-8 h-8 p-0 text-highlight bg-primary-dark rounded-full cursor-default">
                <a
                  href={data.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="transition-all duration-300 ease-in-out hover:text-highlight-dark" />
                </a>
              </button>
            ) : null}
            {data.links?.app ? (
              <button className="flex justify-center items-center w-8 h-8 p-1.5 text-highlight bg-primary-dark rounded-full cursor-default">
                <a
                  href={data.links.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="transition-all duration-300 ease-in-out hover:text-highlight-dark" />
                </a>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
