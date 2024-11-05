import { Row, Col, Card } from "react-bootstrap";
import { GeoAltFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { t } = useTranslation();
  return (
    <Row className="mb-5 mt-3 d-flex align-items-stretch">
      <Col md={4} className="d-flex">
        <Card className="text-center h-100 w-100">
          <Card.Body>
            <GeoAltFill className="text-primary mb-3" size={40} />
            <Card.Title>{t("contact.office")}</Card.Title>
            <Card.Text>
              NEF 22 A Blok. Ataköy 7-8-9-10. Kısım Mh. Çobançeşme E-5 Yan Yol
              Cad. D:30 Bakırköy/İstanbul
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="d-flex">
        <Card className="text-center h-100 w-100">
          <Card.Body>
            <TelephoneFill className="text-primary mb-3" size={40} />
            <Card.Title>{t("contact.mobile")}</Card.Title>
            <Card.Text>+90 (542) 194 14 13</Card.Text>
            <Card.Title>{t("contact.phone")}</Card.Title>
            <Card.Text>+90 (212) 936 19 61</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="d-flex">
        <Card className="text-center h-100 w-100">
          <Card.Body>
            <EnvelopeFill className="text-primary mb-3" size={40} />
            <Card.Title>{t("contact.email")}</Card.Title>
            <Card.Text>
              <a
                href="mailto:kamuran.altay@fu-ra.com.tr"
                style={{ textDecoration: "none" }}
              >
                kamuran.altay@fu-ra.com.tr
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
