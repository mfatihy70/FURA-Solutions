import { useTranslation } from "react-i18next";
import { Row, Col, Button, Image } from "react-bootstrap";
import "@/styles/cart.css";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }: any) => {
  const { t } = useTranslation();

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
        {/* Name */}
        <h5 className="cart-item-title">{t(`${item.name}`)}</h5>

        {/* Price */}
        <span className="text-muted cart-item-price">
          {`${item.price}${t("currency")}`}
        </span>

        {/* Quantity Controls */}
        <div className="cart-item-quantity my-2">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onDecrease(item.id)}
          >
            -
          </Button>
          <span className="mx-3 cart-item-count">{item.quantity}</span>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onIncrease(item.id)}
          >
            +
          </Button>
        </div>
      </Col>

      {/* Remove Button Section */}
      <Col xs={12} sm={3} className="text-center text-sm-end mt-3 mt-sm-0">
        <Button
          variant="danger"
          size="sm"
          className="cart-item-remove"
          onClick={() => onRemove(item.id)}
        >
          {t("cart.remove")}
        </Button>
      </Col>
    </Row>
  );
};

export default CartItem;
