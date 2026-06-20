import "./LanguageSwitcher.css";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {

  const { language, setLanguage } = useLanguage();

  return (

    <div className="language-switcher">

      <button
        className={`language-btn ${language === "it" ? "active" : ""}`}
        onClick={() => setLanguage("it")}
      >
        🇮🇹
      </button>

      <button
        className={`language-btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
      >
        🇬🇧
      </button>

      <button
        className={`language-btn ${language === "de" ? "active" : ""}`}
        onClick={() => setLanguage("de")}
      >
        🇩🇪
      </button>

    </div>

  );

}