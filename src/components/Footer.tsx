import React from "react";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center p-8 bg-primary">
      <div className="flex flex-col items-center gap-1 mb-6 text-center text-sm">
        <p className="mb-2 text-white/30">
          Este site foi feito com NextJS e TailwindCSS
        </p>
        <strong className="text-neutral">Harlon Garcia &copy; 2023</strong>
      </div>
      <div className="flex gap-6 text-highlight">
        <a href="https://github.com/HarlonGarcia" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
        </a>
        <a
          href="https://www.linkedin.com/in/harlongarcia/"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
        </a>
        <a href="" rel="noopener noreferrer">
          <FaDiscord className="h-6 w-6 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
        </a>
      </div>
    </footer>
  );
}
