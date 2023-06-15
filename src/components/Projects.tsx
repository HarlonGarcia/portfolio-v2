import React from "react";
import { Inter } from "next/font/google";

import { projectsData } from "@/utils/projects";
import { FaGithub, FaLink } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <section
      className={`p-8 bg-neutral xs:p-10 sm:hidden sm:p-14 md:p-20 ${inter.className}`}
    >
      <h2 className="mb-4 text-md font-bold">Meu projetos mais recentes</h2>
      <div className="flex flex-col gap-4 mb-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="p-1 collapse collapse-arrow bg-neutral shadow-sm shadow-slate-900/25"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="flex justify-between collapse-title font-medium">
              <h2>{project.title}</h2>
              <div className="flex gap-2">
                {project.links.github ? (
                  <button className="z-10 flex justify-center items-center w-5 h-5 p-3 text-highlight bg-primary rounded-full">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="w-3.5 h-3.w-3.5 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
                    </a>
                  </button>
                ) : null}
                {project.links.app ? (
                  <button className="z-10 flex justify-center items-center w-5 h-5 p-3 text-highlight bg-primary rounded-full">
                    <a
                      href={project.links.app}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink className="w-3.5 h-3.w-3.5 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
                    </a>
                  </button>
                ) : null}
              </div>
            </div>
            <div className="collapse-content">
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
