import React from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

import { projectsData } from "@/utils/projects";

const inter = Inter({ subsets: ["latin"] });

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Projects() {
  return (
    <motion.section
      className={`p-8 bg-neutral xs:p-10 sm:hidden sm:p-14 md:p-20 ${inter.className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-md font-bold">Meu projetos mais recentes</h2>
      <motion.div
        className="flex flex-col gap-4 mb-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="p-1 collapse collapse-arrow bg-neutral shadow-sm shadow-slate-900/25"
            variants={item}
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
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
