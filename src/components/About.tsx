import React from "react";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";

export default function About() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      className="border-collapse flex flex-col items-center p-6 py-8 text-primary bg-neutral-blue bg-mesh xs:items-start xs:p-10 sm:p-14 md:p-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 font-extrabold xs:text-lg md:text-xl">
        Sobre mim...
      </h2>
      <p
        className={`mb-2 text-sm text-center font-medium line-clamp-3 xs:mb-8 xs:text-left xs:line-clamp-none xs:text-base md:text-lg
      ${isExpanded ? "line-clamp-none" : "line-clamp-3"}`}
      >
        Meu nome é Harlon. Iniciei minha carreira como designer, onde trabalhei
        por 2 anos. No entanto, minha paixão pela programação me levou a
        realizar uma transição de carreira e há 2 anos estudo e trabalho com
        React, Node, Java e Python. Estou entusiasmado em aplicar minha
        combinação de habilidades de design e programação me permite criar
        soluções criativas e funcionais.
      </p>
      <button
        className={`animate-bounce xs:hidden ${
          isExpanded ? "hidden" : "mb-4 block"
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <MdExpandMore className="w-6 h-6" />
      </button>
      <div className="hidden text-xs font-bold border-2 border-primary rounded-full overflow-hidden xs:flex sm:text-sm">
        <div className="p-2 px-4">Desenvolvedor Python na JARTTS</div>
        <div className="flex items-center p-2 px-4 text-highlight bg-primary">
          <div className="w-1.5 h-1.5 mr-1.5 rounded-[50%] bg-green-600"></div>
          <strong>#OpenToWork</strong>
        </div>
      </div>
    </motion.div>
  );
}
