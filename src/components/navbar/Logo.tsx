import { Link } from "react-router-dom";
import logo from "/src/assets/images/icons/logo_ustr.png";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/home">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo" height="100" />
      </div>
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </Link>
  );
};

export default Logo;
