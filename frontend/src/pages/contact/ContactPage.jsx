import { Container, Row } from "react-bootstrap"
import ContactImage from "./Image"
import Cards from "./Cards"
import ContactForm from "./Form"
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
        <h2 className="m-5">Contact</h2>
        <Cards />
        <Row className="align-items-start">
          <ContactForm />
          <Map />
        </Row>
      </Container>
    </>
  )
}

export default ContactPage
