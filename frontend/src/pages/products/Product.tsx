import { Card, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "@/styles/products/Product.css" // Import the CSS file

interface ProductProps {
  id: number
  image: string
  name: string
  price: string
  showDetails: boolean
  hovered: boolean
  onHover: (id: number | null) => void
  addToast: (toast: {
    id: number
    message: string
    image: string
    name: string
  }) => void
}

const Product = ({
  id,
  image,
  name,
  price,
  showDetails,
  hovered,
  onHover,
  addToast,
}: ProductProps) => {
  const { t } = useTranslation()
  const { lang } = useParams()

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    const productDetails = { id, image, name, price }
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]")
    cart.push(productDetails)
    sessionStorage.setItem("cart", JSON.stringify(cart))

    // Create a new toast notification
    const newToast = {
      id: Date.now(),
      message: `${name} ${t("product.addedToCart")}`,
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
          <Card.Title>{name}</Card.Title>
          {showDetails && (
            <>
              <Card.Text>{price}</Card.Text>
              <Button variant="primary" onClick={handleAddToCart}>
                {t("product.addToCart")}
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Product
