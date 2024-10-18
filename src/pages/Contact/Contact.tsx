import { Container, Row } from "react-bootstrap";
import ContactImage from "./image";
import Cards from "./cards";
import ContactForm from "./form";
import Map from "./map";

const ContactPage = () => {
  return (
    <Container fluid className="p-0">
      <ContactImage />

      <Container className="py-5">
        <Cards />
        <Row>
          <ContactForm />
          <Map />
        </Row>
      </Container>
    </Container>
  );
};

export default ContactPage;
