import React, { useState } from "react";

import { AiOutlineCaretRight } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { HiTranslate } from "react-icons/hi";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div className="flex h-screen fixed">
      <div
        className={`flex justify-between bg-primary text-white w-16 flex-shrink-0 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-[85%]"
        }`}
      >
        <div className="flex flex-col justify-between py-6 px-4">
          <div className="flex flex-col gap-6 text-highlight">
            <button className="group">
              <FaGithub className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark group-hover:-translate-y-0.5" />
            </button>
            <button className="group">
              <FaLinkedin className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark group-hover:-translate-y-0.5" />
            </button>
            <button className="group">
              <FaDiscord className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark group-hover:-translate-y-0.5" />
            </button>
          </div>
          <button className="group text-highlight">
            <HiTranslate className="w-6 h-6 transition-all duration-300 ease-in-out hover:text-highlight-dark" />
          </button>
        </div>
        <button>
          <AiOutlineCaretRight
            className={`absolute top-1/2 -translate-y-1/2 -right-5 w-8 h-8 flex justify-center items-center text-primary rounded-full
          transition-all duration-300 ease-in-ou
          ${isOpen ? "-translate-x-1" : "translate-x-0"}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      </div>
    </div>
  );
}
