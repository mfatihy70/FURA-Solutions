import { Card, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { handleAddToCart } from "@/utils/products"
import "@/styles/products/Product.css"

const Product = ({
  id,
  imageUrl,
  name,
  price,
  showDetails,
  hovered,
  onHover,
  addToast,
}) => {
  const { t } = useTranslation()
  const { lang } = useParams()

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
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{t(name)}</Card.Title>
          {/* Translate the name for display */}
          {showDetails && (
            <>
              <Card.Text>{`${price}${t("currency")}`}</Card.Text>
              <Button
                variant="primary"
                onClick={(e) => {
                  handleAddToCart(
                    id,
                    imageUrl,
                    t(name), // Pass the translated name here
                    price,
                    addToast,
                    t("cart.add.ed") // Pass the "added to cart" translation
                  )
                }}
              >
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
