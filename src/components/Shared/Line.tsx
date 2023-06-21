import React from "react";

interface LineProps {
  styles?: string;
  thickness?: string;
  length?: number;
}

export default function Line({ styles, thickness, length }: LineProps) {
  return (
    <svg
      className={`bg-primary-dark ${styles}`}
      width={length}
      height={thickness}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="0" x2={length} y2="0" strokeWidth={thickness} />
    </svg>
  );
}
