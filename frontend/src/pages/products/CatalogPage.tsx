import { useEffect } from "react"
import Footer from "@/components/Footer"
import ProductCatalog from "./ProductCatalog"

const CatalogParent = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Render the Catalog component
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <main className="mb-5" style={{ flexGrow: 1 }}>
        <ProductCatalog showDetails={true} />
      </main>
      <Footer />
    </div>
  )
}

export default CatalogParent
