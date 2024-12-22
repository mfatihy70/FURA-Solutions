import Partners from "./Partners"
import { Container } from "react-bootstrap"
import "@/styles/Partners.css"

const PartnersParent = () => {
  return (
    // To fix the footer to the bottom
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
        <Partners />
    </Container>
  )
}

export default PartnersParent
