import { useEffect } from "react"
import ProductCatalog from "./ProductCatalog"

const CatalogPage = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Render the Catalog component
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <ProductCatalog showDetails={true} />
    </div>
  )
}

export default CatalogPage
