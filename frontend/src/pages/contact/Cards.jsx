import { Row, Col, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { GeoAltFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons"

// ContactCard component to display individual contact information
const ContactCard = ({ icon, title, text }) => (
  <Col md={4} className="d-flex">
    <Card className="text-center h-100 w-100">
      <Card.Body>
        {icon}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

// Cards component to display a row of contact cards
const Cards = () => {
  const { t } = useTranslation() // Translation hook

  // Data for each contact card
  const cardData = [
    {
      icon: <GeoAltFill className="text-primary mb-3" size={40} />, // Icon for office location
      title: t("contact.office"), // Title for office location
      text: "NEF 22 A Blok. Ataköy 7-8-9-10. Kısım Mh. Çobançeşme E-5 Yan Yol Cad. D:30 Bakırköy/İstanbul", // Address text
    },
    {
      icon: <TelephoneFill className="text-primary mb-3" size={40} />, // Icon for phone numbers
      title: `${t("contact.mobile")} / ${t("contact.phone")}`, // Title for mobile and phone numbers
      text: (
        <>
          +90 (542) 194 14 13
          <br />
          +90 (212) 936 19 61
        </>
      ), // Phone numbers text
    },
    {
      icon: <EnvelopeFill className="text-primary mb-3" size={40} />, // Icon for email
      title: t("contact.email"), // Title for email
      text: (
        <a
          href="mailto:kamuran.altay@fu-ra.com.tr"
          style={{ textDecoration: "none" }}
        >
          kamuran.altay@fu-ra.com.tr
        </a>
      ), // Email text with mailto link
    },
  ]

  // Render the row of contact cards
  return (
    <Row className="mb-5 mt-3 d-flex align-items-stretch">
      {cardData.map((card, index) => (
        <ContactCard
          key={index} // Unique key for each card
          icon={card.icon} // Icon for the card
          title={card.title} // Title for the card
          text={card.text} // Text for the card
        />
      ))}
    </Row>
  )
}

export default Cards
