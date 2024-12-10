import { Container, Row } from "react-bootstrap"
import Footer from "@/components/Footer"
import ContactImage from "./Image"
import Cards from "./Cards"
import ContactForm from "./form/Form"
import Map from "./Map"
import { useEffect } from "react"

const ContactPage = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      <br />
      <Footer />
    </>
  )
}

export default ContactPage
