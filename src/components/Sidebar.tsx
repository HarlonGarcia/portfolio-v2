import React from "react";
import { useTranslation } from "react-i18next";

import { AiOutlineCaretRight } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { HiTranslate } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.language === "ptBR"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ptBR");
  };

  return (
    <div className="flex h-screen fixed z-20">
      <div
        className={`flex justify-between bg-primary-dark text-white w-16 flex-shrink-0 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[85%]"
        }`}
      >
        <div className="flex flex-col justify-between py-6 px-4">
          <div className="flex flex-col gap-6 text-highlight">
            <a
              className="group"
              href="https://github.com/HarlonGarcia"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark group-hover:-translate-y-0.5" />
            </a>
            <a
              className="group"
              href="https://www.linkedin.com/in/harlongarcia/"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark group-hover:-translate-y-0.5" />
            </a>
            <a className="group">
              <FaDiscord className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark group-hover:-translate-y-0.5" />
            </a>
          </div>
          <button className="group text-highlight" onClick={toggleLanguage}>
            <HiTranslate className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
          </button>
        </div>
        <button>
          <AiOutlineCaretRight
            className={`absolute top-1/2 -translate-y-1/2 -right-5 w-8 h-8 flex justify-center items-center text-primary-dark rounded-full
          transition-all duration-300 ease-in-ou
          ${isOpen ? "-translate-x-1" : "translate-x-0"}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      </div>
    </div>
  );
}
