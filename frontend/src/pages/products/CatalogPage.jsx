import { useEffect } from "react"
import ProductCatalog from "./ProductCatalog"
import { Container } from "react-bootstrap"

const CatalogPage = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Render the Catalog component
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <ProductCatalog showDetails={true} />
    </Container>
  )
}

export default CatalogPage
