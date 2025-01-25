import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { products } from "@/data/products"
import Product from "./Product"
import ToastNotification from "@/components/Toast"

const ProductCatalog = ({ showDetails }) => {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState(null)
  // State to manage the list of toasts
  const [toasts, setToasts] = useState([])

  // Function to add a new toast to the list
  const addToast = (toast) => {
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  // Function to remove a toast from the list by its id
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return (
    <Container id="catalog">
      <h2 className="mb-5 mt-5">{t("product.title")}</h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} sm={10} md={6} lg={4} className="mb-4">
            <Product
              id={product.id}
              image={product.image}
              name={product.name} // Pass the original name
              price={product.price}
              showDetails={showDetails}
              hovered={hovered === product.id}
              onHover={setHovered}
              addToast={addToast} // Pass the addToast function to the Product component
            />
          </Col>
        ))}
      </Row>
      <ToastNotification toasts={toasts} onClose={removeToast} />
    </Container>
  )
}

export default ProductCatalog
