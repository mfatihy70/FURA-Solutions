import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "/src/styles/NavLink.css";

interface LinkProps {
  name: string;
  href: string;
}

const Link = ({ name, href }: LinkProps) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  // Ensure we have a language, fallback to current i18n language
  const currentLang = lang || i18n.language;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      to={`/${currentLang}/${href}`}
      style={{ fontWeight: "600" }}
    >
      {name}
    </NavLink>
  );
};

export default Link;
