import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Our Website",
      description: "This is the English version of the website.",
    },
  },
  bn: {
    translation: {
      welcome: "আমাদের ওয়েবসাইটে স্বাগতম",
      description: "এটি ওয়েবসাইটের বাংলা সংস্করণ।",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
