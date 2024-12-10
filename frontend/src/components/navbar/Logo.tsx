import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "@/assets/icons/logo_ustr.png"
import "@/styles/navbar/Logo.css"

const Logo = () => {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  // Ensure we have a language, fallback to current i18n language
  const currentLang = lang || i18n.language

  return (
    <Link className="navbar-brand" to={`/${currentLang}/home`}>
      <img className="logo-wrapper" src={logo} alt="Logo" height="100" />
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </Link>
  )
}

export default Logo
