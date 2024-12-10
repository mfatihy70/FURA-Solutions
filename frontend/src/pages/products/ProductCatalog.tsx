import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { products } from "@/data/products" // Import the products data
import Product from "./Product"
import ToastNotification from "./Toast"

const ProductCatalog = ({ showDetails }: { showDetails: boolean }) => {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState<number | null>(null)

  // State to manage the list of toasts
  const [toasts, setToasts] = useState<
    { id: number; message: string; image: string; name: string }[]
  >([])

  // Function to add a new toast to the list
  const addToast = (toast: {
    id: number
    message: string
    image: string
    name: string
  }) => {
    setToasts((prevToasts) => [...prevToasts, toast])
  }

  // Function to remove a toast from the list by its id
  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  // Map the products to include the translated names and prices
  const translatedProducts = products.map((product) => ({
    ...product,
    name: t(product.name),
    price: product.price.concat(t("currency")),
  }))

  return (
    <Container id="catalog">
      <h2 className="mb-5 mt-5">{t("product.title")}</h2>
      <Row className="justify-content-center">
        {translatedProducts.map((product) => (
          <Col key={product.id} sm={10} md={6} lg={4} className="mb-4">
            <Product
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              showDetails={showDetails}
              hovered={hovered === product.id}
              onHover={setHovered}
              addToast={addToast} // Pass the addToast function to the Product component
            />
          </Col>
        ))}
      </Row>
      <ToastNotification toasts={toasts} onClose={removeToast} />{" "}
      {/* Render the ToastNotification component */}
    </Container>
  )
}

export default ProductCatalog
