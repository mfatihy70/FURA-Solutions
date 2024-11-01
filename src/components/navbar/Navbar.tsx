import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import Link from "./NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "/src/styles/Navbar.css";
import LanguageSwitch from "../locales/LanguageSwitch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "home", href: "home" },
    { name: "about", href: "about" },
    { name: "partners", href: "partners" },
    { name: "contact", href: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-5">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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
