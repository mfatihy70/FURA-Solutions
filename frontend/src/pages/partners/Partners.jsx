import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { fetchPartners } from "@/utils/partners"

const Partners = () => {
  const { t } = useTranslation()
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchPartners(setPartners, setLoading, setError)
  }, [])

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Container className="my-5">
      <h2 className="mb-5">{t("partners")}</h2>
      <Row className="align-items-center">
        {partners.map((partner, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <a href={partner.link} className="d-block text-center">
              <img
                src={partner.imageUrl}
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
