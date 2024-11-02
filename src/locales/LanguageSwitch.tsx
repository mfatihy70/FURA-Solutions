import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "flag-icon-css/css/flag-icons.min.css";
import { LANGUAGES } from "./i18n.js";

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const getCurrentFlag = () => {
    const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language);
    return currentLang?.flag || "gb";
  };

  const changeLang = (langCode: string) => {
    i18n.changeLanguage(langCode);
    // Update URL to match new language
    const currentPath = window.location.hash.split("/").slice(2).join("/");
    navigate(`/${langCode}/${currentPath}`);
    setIsOpen(false);
  };

  return (
    <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
      <button
        className="nav-link dropdown-toggle d-flex align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className={`flag-icon flag-icon-${getCurrentFlag()}`}
          style={{ width: "1.5em", height: "1.5em" }}
        ></span>
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? "show" : ""}`}>
        {LANGUAGES.map((lang) => (
          <li key={lang.code}>
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              onClick={() => changeLang(lang.code)}
            >
              <span
                className={`flag-icon flag-icon-${lang.flag}`}
                style={{ width: "1.5em", height: "1.5em" }}
              ></span>
              {lang.name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default LanguageSwitch;
