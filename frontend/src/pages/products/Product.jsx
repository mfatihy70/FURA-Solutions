import { Card, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "@/styles/products/Product.css"

const Product = ({
  id,
  image,
  name,
  price,
  showDetails,
  hovered,
  onHover,
  addToast,
}) => {
  const { t } = useTranslation()
  const { lang } = useParams()

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    const productDetails = { id, image, name, price, quantity: 1 }
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === id)
    if (existingProductIndex !== -1) {
      // Increase the quantity of the existing product
      cart[existingProductIndex].quantity += 1
    } else {
      // Add the new product to the cart
      cart.push(productDetails)
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    // Dispatch a custom event to notify about the cart update
    window.dispatchEvent(new Event("cartUpdated"))

    // Create a new toast notification
    const newToast = {
      id: Date.now(),
      message: `${t(name)} ${t("cart.add.ed")}`, // Translate the name for the toast message
      image,
      name,
    }
    addToast(newToast)
  }

  return (
    <Link
      to={`/${lang}/products`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card
        className={`product-card ${hovered ? "hovered" : ""}`}
        onPointerOver={() => onHover(id)}
        onPointerOut={() => onHover(null)}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{t(name)}</Card.Title>
          {/* Translate the name for display */}
          {showDetails && (
            <>
              <Card.Text>{`${price}${t("currency")}`}</Card.Text>
              <Button variant="primary" onClick={handleAddToCart}>
                {t("cart.add.toCart")}
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Product
