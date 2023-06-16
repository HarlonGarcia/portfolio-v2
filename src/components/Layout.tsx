import React from "react";
import Sidebar from "./Sidebar";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`flex flex-col min-h-screen bg-base transition-all duration-300 ease-in-out
        ${isOpen ? "ml-16" : "duration-0 ml-2"}`}
      >
        {children}
      </div>
    </>
  );
}
