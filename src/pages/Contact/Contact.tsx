import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import ContactImage from "./image";
import Cards from "./cards";
import ContactForm from "./form";
import Map from "./map";

const ContactPage = () => {
  return (
    <>
      <Container>
        <ContactImage />
        <Cards />
        <Row>
          <ContactForm />
          <Map />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
