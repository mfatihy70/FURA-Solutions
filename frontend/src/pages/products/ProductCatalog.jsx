import { useState, useEffect } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import Product from "./Product"
import ToastNotification from "@/components/Toast"
import { getProducts } from "@/utils/products"

const ProductCatalog = ({ showDetails }) => {
  const { t } = useTranslation()
  const [products, setProducts] = useState([]) // State to store products fetched from API
  const [loading, setLoading] = useState(true) // State to handle loading
  const [error, setError] = useState("") // State to handle errors
  const [hovered, setHovered] = useState(null) // State for hovered product
  const [toasts, setToasts] = useState([]) // State to manage toast notifications

  // Fetch products on component mount
  useEffect(() => {
    getProducts(setProducts, setError, setLoading)
  }, [])

  // Function to add a new toast to the list
  const addToast = (toast) => {
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  // Function to remove a toast from the list by its id
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-start min-vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <Container id="catalog">
      <h2 className="mb-5">{t("products")}</h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product._id} sm={10} md={6} lg={4} className="mb-4">
            <Product
              id={product._id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              showDetails={showDetails}
              hovered={hovered === product._id}
              onHover={setHovered}
              addToast={addToast}
            />
          </Col>
        ))}
      </Row>
      <ToastNotification toasts={toasts} onClose={removeToast} />
    </Container>
  )
}

export default ProductCatalog
