import React from "react";

export default function ThemeSwitcher() {
  return (
    <select
      className="select select-sm absolute z-10 top-2 right-2 w-24 bg-neutral shadow-md focus:outline-none xs:top-5 xs:right-5 xs:w-32"
      data-choose-theme
    >
      <option value="">Light</option>
      <option value="dracula">Dracula</option>
    </select>
  );
}
