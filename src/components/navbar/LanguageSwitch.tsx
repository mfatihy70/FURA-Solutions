import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LANGUAGES } from "@/locales/i18n";
import "flag-icon-css/css/flag-icons.min.css";
import "@/styles/navbar/LanguageSwitch.css";

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Function to get the current language's flag icon
  const getCurrentFlag = () => {
    const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language);
    return currentLang?.flag || "tr";
  };

  // Function to change the language and update the URL
  const changeLang = (langCode: string) => {
    i18n.changeLanguage(langCode); // Change the language in i18n
    // Update URL to match new language
    const currentPath = window.location.hash.split("/").slice(2).join("/");
    navigate(`/${langCode}/${currentPath}`);
    setIsOpen(false); // Close the dropdown
  };

  return (
    <li className={`nav-item dropdown ${isOpen ? "show" : ""}`}>
      {/* Button to toggle the dropdown */}
      <button
        className="nav-link dropdown-toggle d-flex align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {/* Display the current language's flag */}
        <span
          className={`flag-icon flag-icon-${getCurrentFlag()}`}
          style={{ width: "1.5em", height: "1.5em" }}
        ></span>
      </button>
      {/* Dropdown menu */}
      <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? "show" : ""}`}>
        {LANGUAGES.map((lang) => (
          <li key={lang.code}>
            {/* Button to change the language */}
            <button
              className="dropdown-item d-flex align-items-center gap-2"
              onClick={() => changeLang(lang.code)}
            >
              {/* Display the flag and name of the language */}
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
