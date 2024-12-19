import { useTranslation } from "react-i18next"
import { getLanguageFromRoute } from "@/locales/i18n"
import { Container, Row, Col } from "react-bootstrap"
import "@/styles/Footer.css"

const Footer = () => {
  const { t } = useTranslation()
  const currentLanguage = getLanguageFromRoute()

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
          >
            <p className="mb-0">&copy; 2024 FURA Solutions. {t("copy")}</p>
          </Col>
          <Col md={6}>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
