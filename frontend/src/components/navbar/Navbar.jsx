import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Navbar, Nav } from "react-bootstrap"
import CartIcon from "./CartIcon"
import Logo from "./Logo"
import Link from "./NavLink"
import LanguageSwitch from "./LanguageSwitch"

const CustomNavbar = () => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  // Navigation items
  const navItems = [
    { name: "navbar.home", href: "home" },
    { name: "navbar.about", href: "about" },
    { name: "navbar.partners", href: "partners" },
    { name: "navbar.products", href: "products" },
    { name: "navbar.login", href: "login" },
    { name: "navbar.contact", href: "contact" },
  ]

  // Function to collapse the navbar
  const handleNavCollapse = () => setIsExpanded(false)

  return (
    <Navbar
      expand="lg"
      className="mb-5 px-5"
      expanded={isExpanded}
      onToggle={(expanded) => setIsExpanded(expanded)}
    >
      <Navbar.Brand onClick={handleNavCollapse} style={{ cursor: "pointer" }}>
        {/* Ensure the Logo acts like a link */}
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto mb-2" onClick={handleNavCollapse}>
          {navItems.map((item) => (
            <Link key={item.name} name={t(item.name)} href={item.href} />
          ))}
        </Nav>
        <div className="d-flex justify-content-center align-items-center">
          <CartIcon onCollapse={handleNavCollapse} />
          <LanguageSwitch onCollapse={handleNavCollapse} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
