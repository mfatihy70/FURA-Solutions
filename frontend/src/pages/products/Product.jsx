import { Card, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { handleAddToCart } from "/.Functions"
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
                onClick={() =>
                  handleAddToCart(id, imageUrl, name, price, addToast)
                }
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
