import { NavLink } from "react-router-dom";

interface LinkProps {
  name: string;
  href: string;
}

const Link = ({ name, href }: LinkProps) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link font-link"
        to={`/${href}`}
        style={{ fontWeight: "600" }}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Link;
