import { Row, Col, Button, Image } from "react-bootstrap"
import {
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
} from "./functions"
import "@/styles/cart.css"

const CartItem = ({ item, cart, setCart, setToasts, t }) => {
  return (
    <Row className="cart-item align-items-center">
      {/* Image Section */}
      <Col xs={4} sm={3}>
        <Image
          src={item.image}
          alt={item.name}
          fluid
          rounded
          className="cart-item-image"
        />
      </Col>

      {/* Details Section */}
      <Col xs={8} sm={6} className="text-center">
        <h5 className="cart-item-title">{t(`${item.name}`)}</h5>
        <span className="cart-item-price">{`${item.price}${t(
          "currency"
        )}`}</span>

        {/* Quantity Controls */}
        <div className="cart-item-quantity my-2">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => handleDecreaseQuantity(item.id, cart, setCart)}
          >
            -
          </Button>
          <span className="mx-3 cart-item-count">{item.quantity}</span>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => handleIncreaseQuantity(item.id, cart, setCart)}
          >
            +
          </Button>
        </div>
      </Col>

      {/* Remove Button */}
      <Col xs={12} sm={3} className="text-center text-sm-end mt-3 mt-sm-0">
        <Button
          variant="danger"
          onClick={() => handleRemoveItem(item.id, cart, setCart, setToasts, t)}
        >
          {t("cart.remove.button")}
        </Button>
      </Col>
    </Row>
  )
}

export default CartItem
