import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeSwitcher() {
  return (
    <select
      className="select select-sm absolute z-10 top-5 right-5 w-32 bg-neutral shadow-md focus:outline-none"
      data-choose-theme
    >
      <option value="" className="flex">
        Light
      </option>
      <option value="dracula" className="flex">
        Dracula
      </option>
    </select>
  );
}
