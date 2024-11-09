import { Link, useParams } from "react-router-dom";
import logo from "@/assets/icons/logo_ustr.png";
import "@/styles/navbar/Logo.css";

const Logo = () => {
  const { lang } = useParams();

  return (
    <Link className="navbar-brand" to={`/${lang}/home`}>
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" height="100" />
      </div>
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </Link>
  );
};

export default Logo;
