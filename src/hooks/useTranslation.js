import { useLanguage } from "../context/LanguageContext";
import translations from "../data/translations.json";

export default function useTranslation() {

  const { language } = useLanguage();

  return translations[language] || translations.it;

}