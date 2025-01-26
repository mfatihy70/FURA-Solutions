import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Container, ListGroup, Row, Col } from "react-bootstrap"
import { loadCart, handleToastClose } from "./functions"
import ToastNotification from "@/components/Toast"
import CartItem from "./Item"
import CartOverview from "./Overview"

const Cart = () => {
  const { t } = useTranslation()

  // State for cart items and toasts
  const [cart, setCart] = useState([])
  const [toasts, setToasts] = useState([])

  // Constants
  const SHIPPING_COST = 5.99 // Fixed shipping cost

  // Load cart from local storage
  useEffect(() => {
    loadCart(setCart)
  }, [])

  return (
    <Container className="min-vh-100">
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
                    cart={cart}
                    setCart={setCart}
                    setToasts={setToasts}
                    t={t}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Overview Section */}
          <Col md={4} className="overview-top-right">
            <CartOverview cart={cart} shippingCost={SHIPPING_COST} />
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Cart
