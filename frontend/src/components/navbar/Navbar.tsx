import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Navbar, Nav, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import CartIcon from "./CartIcon"
import Logo from "./Logo"
import Link from "./NavLink"
import LanguageSwitch from "./LanguageSwitch"
import "@/styles/navbar/Navbar.css" // Import the custom CSS file

const CustomNavbar = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "navbar.home", href: "home" },
    { name: "navbar.about", href: "about" },
    { name: "navbar.partners", href: "partners" },
    { name: "navbar.products", href: "products" },
    { name: "navbar.login", href: "login" },
    { name: "navbar.contact", href: "contact" },
  ]

  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
          <Nav className="ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <Link key={item.name} name={t(item.name)} href={item.href} />
            ))}
          </Nav>
          <div className="custom-navbar-icons">
            <CartIcon />
            <LanguageSwitch />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
