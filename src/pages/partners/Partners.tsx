import { agro, flexa, ht, ivm } from "@/assets/images/partners/import";
import "@/styles/Partners.css";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

const Partners = () => {
  const { t } = useTranslation();
  const partners = [
    {
      href: "https://www.flexa.de/home/EN_index_1000.html",
      src: flexa,
      alt: "Flexa",
    },
    {
      href: "https://www.kaiser-elektro.de/en_DE/products/cable-glands-industrial-products/",
      src: agro,
      alt: "Kaiser Elektro",
    },
    {
      href: "https://www.hellermanntyton.com/tr",
      src: ht,
      alt: "Hellermann Tyton",
    },
    {
      href: "https://ivmtech.it/en/",
      src: ivm,
      alt: "Ivmtech",
    },
  ];

  return (
    <Container className="my-4">
      <h1 className="mb-5 mt-5">{t("partners")}</h1>
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
  );
};

export default Partners;
