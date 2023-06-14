import React from "react";

import { Project } from "@/types/Project";
import { FaGithub, FaLink } from "react-icons/fa";

interface TimelineItemProps {
  data: Project;
}

export default function TimelineItem({ data }: TimelineItemProps) {
  return (
    <div className="group relative flex justify-end pr-[30px] my-2 w-1/2 odd:self-end odd:justify-start odd:pl-[30px] odd:pr-0">
      <div
        className="card-body card card-compact bg-neutral shadow-to-r shadow-slate-900/10 transition-all duration-500 ease-in-out
        after:content-[' '] after:absolute after:-right-2 after:top-[calc(50%_-_8px)] after:w-4 
        after:h-4 after:rotate-45 after:bg-neutral hover:shadow-slate-900/20 group-odd:shadow-to-l group-odd:hover:shadow-slate-900/20 group-odd:after:right-auto
        group-odd:after:-left-2"
      >
        <div
          className="absolute top-[calc(50%_-_10px)] -right-10 w-5 h-5 z-20 
      p-1 bg-neutral border-highlight border-2 rounded-full group-odd:right-auto group-odd:-left-10"
        ></div>
        <h2 className="card-title mb-0 text-primary font-black">
          {data.title}
        </h2>
        <p className="mb-2 text-primary font-semibold">{data.description}</p>
        <div className="card-actions justify-between items-center">
          <div className="hidden md:block">
            {data.tags.map((tag, index) => (
              <span
                key={tag + index.toString()}
                className="py-0.5 px-2 mr-2 text-xs text-neutral bg-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-1 md:gap-2">
            {data.links?.github ? (
              <button className="flex justify-center items-center w-8 h-8 p-0 text-highlight bg-primary rounded-full">
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
              <button className="flex justify-center items-center w-8 h-8 p-1.5 text-highlight bg-primary rounded-full">
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
