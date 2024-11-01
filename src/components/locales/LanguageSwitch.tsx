import { useState } from "react";
import { useTranslation } from "react-i18next";
import "flag-icon-css/css/flag-icons.min.css";

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: 'gb' },
    { code: 'de', name: 'Deutsch', flag: 'de' },
    { code: 'tr', name: 'Türkçe', flag: 'tr' }
  ];

  const getCurrentFlag = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang?.flag || 'gb';
  };

  const changeLang = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <li className={`nav-item dropdown ${isOpen ? 'show' : ''}`}>
      <button
        className="nav-link dropdown-toggle d-flex align-items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={`flag-icon flag-icon-${getCurrentFlag()}`} style={{ width: '1.5em', height: '1.5em' }}></span>
      </button>
      <ul className={`dropdown-menu dropdown-menu-end ${isOpen ? 'show' : ''}`}>
        {languages.map((lang) => (
          <li key={lang.code}>
            <button 
              className="dropdown-item d-flex align-items-center gap-2" 
              onClick={() => changeLang(lang.code)}
            >
              <span className={`flag-icon flag-icon-${lang.flag}`} style={{ width: '1.5em', height: '1.5em' }}></span>
              {lang.name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default LanguageSwitch;