import { Container, Row } from "react-bootstrap";
import Footer from "@/components/Footer";
import ContactImage from "./Image";
import Cards from "./Cards";
import ContactForm from "./Form";
import Map from "./Map";

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
