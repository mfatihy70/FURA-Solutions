import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LANGUAGES } from "@/locales/i18n";
import { Dropdown } from "react-bootstrap";
import "flag-icon-css/css/flag-icons.min.css";
import "@/styles/navbar/LanguageSwitch.css";

interface LanguageSwitchProps {
  onCollapse?: () => void;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ onCollapse }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const getCurrentFlag = () => {
    const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language);
    return currentLang?.flag || "tr";
  };

  const changeLang = (langCode: string | undefined) => {
    i18n.changeLanguage(langCode);
    const currentPath = window.location.hash.split("/").slice(2).join("/");
    navigate(`/${langCode}/${currentPath}`);
    setIsOpen(false);
    if (onCollapse) onCollapse(); // Collapse navbar
  };

  return (
    <Dropdown className="m-2" show={isOpen} onToggle={() => setIsOpen(!isOpen)}>
      <Dropdown.Toggle
        as="button"
        variant="link"
        id="dropdown-basic"
        className="language-switch d-flex align-items-center"
      >
        <span
          className={`flag-icon flag-icon-${getCurrentFlag()}`}
          style={{ width: "1.5em", height: "1.5em" }}
        ></span>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        {LANGUAGES.map((lang) => (
          <Dropdown.Item
            key={lang.code}
            onClick={() => changeLang(lang.code)}
            className="d-flex align-items-center gap-2"
          >
            <span
              className={`flag-icon flag-icon-${lang.flag}`}
              style={{ width: "1.5em", height: "1.5em" }}
            ></span>
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitch;
