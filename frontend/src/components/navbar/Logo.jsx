import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "@/assets/icons/logo_ustr.png"
import "@/styles/navbar/Logo.css"

const Logo = () => {
  const { i18n } = useTranslation()

  return (
    <Link className="navbar-brand" to={`/${i18n.language}/home`}>
      <img className="logo-wrapper" src={logo} alt="Logo" height="100" />
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </Link>
  )
}

export default Logo
