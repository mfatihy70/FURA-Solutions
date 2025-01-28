import { NavLink, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "@/styles/navbar/NavLink.css"

const Link = ({ name, href }) => {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  const currentLang = lang || i18n.language

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      to={`/${currentLang}/${href}`}
    >
      <span>{name}</span>
    </NavLink>
  )
}

export default Link
