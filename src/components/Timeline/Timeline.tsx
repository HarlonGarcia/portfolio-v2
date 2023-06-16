import React from "react";

import TimelineItem from "./TimelineItem";
import { projectsData } from "@/utils/projects";
import Breadcrumbs from "../Breadcrumbs";

export default function Timeline() {
  return (
    <div className="hidden p-6 bg-neutral xs:p-10 sm:block sm:p-14 md:p-20">
      <Breadcrumbs />
      <div
        className="relative flex flex-col after:content-[' '] after:absolute 
    after:left-[calc(50%_-_2px)] after:w-1 after:h-full after:bg-highlight md:p-2"
      >
        {projectsData.map((project, index) => (
          <TimelineItem
            key={project.title + index.toString()}
            data={project}
            translateValue={index % 2 == 0 ? 400 : -400}
          />
        ))}
      </div>
    </div>
  );
}
