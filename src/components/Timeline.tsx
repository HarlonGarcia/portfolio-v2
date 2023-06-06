import React from "react";

import TimelineItem from "./TimelineItem";
import { projectsData } from "@/utils/projects";

export default function Timeline() {
  return (
    <div
      className="hidden relative flex-col p-6 bg-neutral after:content-[' '] after:absolute 
    after:left-[calc(50%_-_2px)] after:w-1 after:h-full after:bg-highlight sm:flex xs:p-10 sm:p-14 md:p-20"
    >
      {projectsData.map((project) => (
        <TimelineItem data={project} />
      ))}
    </div>
  );
}
