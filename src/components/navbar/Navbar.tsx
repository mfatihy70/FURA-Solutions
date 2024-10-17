import { useState } from "react";
import Logo from "./Logo";
import Link from "./NavLink";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
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
            <Link name="HAKKIMIZDA" href="about" />
            <Link name="ÇÖZÜMLERİMİZ" href="solutions" />
            <Link name="PARTNERLERİMİZ" href="partners" />
            <Link name="İLETİŞİM" href="contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
