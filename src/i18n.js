import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../public/locales/en/common.json";
import ar from "../public/locales/ar/common.json";

const resources = {
  en: { common: en },
  ar: { common: ar },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
  });

// تحكم في اتجاه الصفحة ولغة الوسم <html>
const applyDir = (lng) => {
  const dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lng);
};
applyDir(i18n.resolvedLanguage);
i18n.on("languageChanged", applyDir);

export default i18n;
