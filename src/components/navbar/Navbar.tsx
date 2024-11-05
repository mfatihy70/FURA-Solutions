import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import Link from "./NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import LanguageSwitch from "./LanguageSwitch";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "navbar.home", href: "home" },
    { name: "navbar.about", href: "about" },
    { name: "navbar.partners", href: "partners" },
    { name: "navbar.contact", href: "contact" },
    { name: "navbar.login", href: "login" },
  ];

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
      <div className="container">
        <Logo />
        <ToggleButton isOpen={isOpen} toggle={toggle} />
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <Link key={item.href} name={t(item.name)} href={item.href} />
            ))}
            <LanguageSwitch />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
