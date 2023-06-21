import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdExpandMore } from "react-icons/md";

export default function About() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { t } = useTranslation();

  return (
    <motion.section
      className="border-collapse flex flex-col p-6 py-8 text-primary bg-neutral-blue bg-mesh xs:p-10 sm:p-14 md:p-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-2 mb-6 xs:items-start xs:mb-8 sm:mb-10">
        <h2 className="mb-2 font-extrabold xs:text-lg md:text-xl">
          {t("about.title")}
        </h2>
        <p
          className={`text-sm text-center font-medium line-clamp-3 xs:text-left xs:line-clamp-none xs:text-base md:text-lg
        ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}
        >
          {t("about.description.1")}{" "}
          <span className="px-1 mx-0.5 text-xs bg-highlight rounded-sm sm:text-sm md:text-base">
            React
          </span>
          ,{" "}
          <span className="px-1 mx-0.5 text-xs bg-highlight rounded-sm sm:text-sm md:text-base">
            Node
          </span>
          ,{" "}
          <span className="px-1 mx-0.5 text-xs bg-highlight rounded-sm sm:text-sm md:text-base">
            Java
          </span>{" "}
          {t("connector")}{" "}
          <span className="px-1 mx-0.5 text-xs bg-highlight rounded-sm sm:text-sm md:text-base">
            Python
          </span>
          . {t("about.description.2")}
        </p>
        <button
          className={`animate-bounce xs:hidden ${
            isExpanded ? "hidden" : "block"
          }`}
          onClick={() => setIsExpanded(true)}
        >
          <MdExpandMore className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-col items-center xs:items-start">
        <small className="mb-2 text-sm font-bold">{t("about.status")}</small>
        <strong className="py-1 px-2 text-xs text-highlight bg-primary rounded shadow-lg shadow-highlight xs:hidden">
          Python Developer
        </strong>
        <div className="hidden text-xs font-bold border-2 border-primary rounded-full overflow-hidden xs:flex sm:text-sm">
          <div className="p-2 px-4">Python Developer</div>
          <div className="flex items-center p-2 px-4 text-highlight bg-primary">
            <div className="w-1.5 h-1.5 mr-1.5 rounded-[50%] bg-green-600"></div>
            <strong>#OpenToWork</strong>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
