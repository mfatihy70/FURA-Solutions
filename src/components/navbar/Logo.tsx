import logo from "../../assets/images/logo_ustr.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" height="100" />{" "}
      <p className="fs-6 font-logo">INDUSTRIAL SOLUTIONS</p>
    </a>
  );
};

export default Logo;
