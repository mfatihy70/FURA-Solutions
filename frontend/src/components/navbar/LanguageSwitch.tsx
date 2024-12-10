import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { LANGUAGES } from "@/locales/i18n"
import "flag-icon-css/css/flag-icons.min.css"
import "@/styles/navbar/LanguageSwitch.css"
import { Dropdown } from "react-bootstrap"

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  // Function to get the current language's flag icon
  const getCurrentFlag = () => {
    const currentLang = LANGUAGES.find((lang) => lang.code === i18n.language)
    return currentLang?.flag || "tr"
  }

  // Function to change the language and update the URL
  const changeLang = (langCode: string) => {
    i18n.changeLanguage(langCode) // Change the language in i18n
    // Update URL to match new language
    const currentPath = window.location.hash.split("/").slice(2).join("/")
    navigate(`/${langCode}/${currentPath}`)
    setIsOpen(false) // Close the dropdown
  }

  return (
    <Dropdown className="m-2" show={isOpen} onToggle={() => setIsOpen(!isOpen)}>
      <Dropdown.Toggle
        as="button" // Render as a button to avoid nested <a> tags
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
  )
}

export default LanguageSwitch
