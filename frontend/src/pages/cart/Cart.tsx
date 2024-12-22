import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import CartItem from "./Item";
import ToastNotification from "@/components/Toast";
import CartOverview from "./Overview";
import {
  loadCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
  handleToastClose,
  calculateTotalItems,
  calculateSubtotal,
} from "./Functions";

const Cart = () => {
  const { t } = useTranslation();

  // State for cart items and toasts
  const [cart, setCart] = useState<any[]>([]);
  const [toasts, setToasts] = useState<any[]>([]);

  // Constants
  const SHIPPING_COST = 5.99; // Fixed shipping cost

  // Load cart from local storage
  useEffect(() => {
    loadCart(setCart);
  }, []);

  // Recalculate totals whenever the cart updates
  const totalItems = calculateTotalItems(cart);
  const subtotal = calculateSubtotal(cart);
  const totalPrice = subtotal + (subtotal > 0 ? SHIPPING_COST : 0);

  return (
    <Container>
      <h2 className="cart-title text-center mb-5">{t("cart.title")}</h2>

      {/* Toast Notifications */}
      <ToastNotification
        toasts={toasts}
        onClose={(id) => handleToastClose(id, setToasts)}
      />

      {/* Cart Content */}
      {cart.length === 0 ? (
        <p className="text-center">{t("cart.empty")}</p>
      ) : (
        <Row>
          {/* Cart Items */}
          <Col md={8}>
            <ListGroup>
              {cart.map((item) => (
                <ListGroup.Item key={item.id} className="mb-3 p-3">
                  <CartItem
                    item={item}
                    onIncrease={() => {
                      handleIncreaseQuantity(item.id, cart, setCart);
                    }}
                    onDecrease={() => {
                      handleDecreaseQuantity(item.id, cart, setCart);
                    }}
                    onRemove={() => {
                      handleRemoveItem(item.id, cart, setCart, setToasts, t);
                    }}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Overview Section */}
          <Col md={4} className="overview-top-right">
            <CartOverview
              totalItems={totalItems}
              subtotal={subtotal}
              totalPrice={totalPrice}
              shippingCost={SHIPPING_COST}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
