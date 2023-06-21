import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "./translations/enUS.json";
import ptBR from "./translations/ptBR.json";

i18next.use(initReactI18next).init({
  fallbackLng: "ptBR",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enUS,
    ptBR: ptBR,
  },
});
