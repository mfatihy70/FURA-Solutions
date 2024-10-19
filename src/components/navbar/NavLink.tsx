import { NavLink } from "react-router-dom";

interface LinkProps {
  name: string;
  href: string;
}

const Link = ({ name, href }: LinkProps) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to={`/${href}`}
        style={{ fontWeight: "600" }}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default Link;
