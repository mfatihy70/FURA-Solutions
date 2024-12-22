import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { partners } from "@/data/partners"

const Partners = () => {
  const { t } = useTranslation()

  return (
    <Container className="my-5">
      <h2 className="mb-5">{t("partners")}</h2>
      <Row className="align-items-center">
        {partners.map((partner, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <a href={partner.href} className="d-block text-center">
              <img
                src={partner.src}
                alt={partner.alt}
                className="img-fluid partner-img"
              />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Partners
