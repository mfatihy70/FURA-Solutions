import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Navbar, Nav } from "react-bootstrap"
import CartIcon from "./CartIcon"
import Logo from "./Logo"
import Link from "./NavLink"
import LanguageSwitch from "./LanguageSwitch"
import "@/styles/navbar/Navbar.css"

const CustomNavbar = () => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const navItems = [
    { name: "navbar.home", href: "home" },
    { name: "navbar.about", href: "about" },
    { name: "navbar.partners", href: "partners" },
    { name: "navbar.products", href: "products" },
    { name: "navbar.login", href: "login" },
    { name: "navbar.contact", href: "contact" },
  ]

  return (
    <Navbar
      expand="lg"
      className="mb-5 mx-5 px-5 custom-navbar"
      expanded={isExpanded}
      sticky="top"
      onToggle={(expanded) => setIsExpanded(expanded)}
    >
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mb-2" onClick={() => setIsExpanded(false)}>
          {navItems.map((item) => (
            <Link key={item.name} name={t(item.name)} href={item.href} />
          ))}
        </Nav>
        <div className="d-flex justify-content-center align-items-center">
          <CartIcon />
          <LanguageSwitch />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
