import { useTranslation } from "react-i18next";
import { getLanguageFromRoute } from "@/locales/i18n";
import "@/styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentLanguage = getLanguageFromRoute();

  return (
    <footer className="bg-dark text-light py-4" style={{ marginTop: "5em" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; 2024 FURA Solutions. {t("copy")}</p>
          </div>
          <div className="col-md-6">
            <nav>
              <ul className="list-inline text-center text-md-end mb-0">
                <li className="list-inline-item ms-3">
                  <a
                    href="https://www.linkedin.com/company/fura-makina-end%C3%BCstriyel-%C3%A7%C3%B6z%C3%BCmler-ltd-%C5%9Fti/"
                    target="_blank"
                    className="footer-link text-decoration-none"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a
                    href={`#/${currentLanguage}/about`}
                    className="footer-link text-decoration-none"
                  >
                    {t("about")}
                  </a>
                </li>
                <li className="list-inline-item ms-3">
                  <a
                    href={`#/${currentLanguage}/contact`}
                    className="footer-link text-decoration-none"
                  >
                    {t("contact.title")}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
