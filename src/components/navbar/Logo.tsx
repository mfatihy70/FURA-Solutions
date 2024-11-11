import { Link, useParams } from "react-router-dom";
import logo from "@/assets/icons/logo_ustr.png";
import "@/styles/navbar/Logo.css";

const Logo = () => {
  const { lang } = useParams();

  return (
    <Link className="navbar-brand" to={`/${lang}/home`}>
      <img className="logo-wrapper" src={logo} alt="Logo" height="100" />
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </Link>
  );
};

export default Logo;
