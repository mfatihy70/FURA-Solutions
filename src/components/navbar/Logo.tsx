import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/logo_ustr.png";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/home">
      <img src={logo} alt="Logo" height="100" />
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </Link>
  );
};

export default Logo;
