import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { Dropdown } from "react-bootstrap"
import "@/styles/navbar/LanguageSwitch.css"
import { LANGUAGES } from "@/locales/i18n"

// Change the imports to .png
import trFlag from "@/assets/languages/tr.png"
import gbFlag from "@/assets/languages/gb.png"
import deFlag from "@/assets/languages/de.png"

const LanguageSwitch = ({ onCollapse }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  // Get the current language's flag
  const getCurrentFlag = () => {
    switch (i18n.language) {
      case "tr":
        return trFlag
      case "en":
        return gbFlag
      case "de":
        return deFlag
      default:
        return trFlag
    }
  }

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    const currentPath = window.location.hash.split("/").slice(2).join("/")
    navigate(`/${langCode}/${currentPath}`)
    setIsOpen(false)
    onCollapse?.()
  }

  return (
    <Dropdown
      className="m-2"
      show={isOpen}
      onToggle={() => setIsOpen((prev) => !prev)}
    >
      <Dropdown.Toggle
        as="button"
        variant="link"
        className="language-switch d-flex align-items-center"
        id="dropdown-basic"
      >
        <img
          src={getCurrentFlag()}
          alt={i18n.language}
          style={{ width: "1.8em", height: "1.35em" }} // Updated dimensions for rectangular shape
        />
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        {LANGUAGES.map(({ code, name }) => {
          let flagSrc
          switch (code) {
            case "tr":
              flagSrc = trFlag
              break
            case "en":
              flagSrc = gbFlag
              break
            case "de":
              flagSrc = deFlag
              break
            default:
              flagSrc = trFlag
          }

          return (
            <Dropdown.Item
              key={code}
              onClick={() => handleLanguageChange(code)}
              className="d-flex align-items-center gap-2"
            >
              <img
                src={flagSrc}
                alt={name}
                style={{ width: "1.8em", height: "1.35em" }} // Updated dimensions for rectangular shape
              />
              {name}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LanguageSwitch
