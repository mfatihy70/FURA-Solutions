import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap"

const Cart = () => {
  const { t } = useTranslation()
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cart") || "[]")
    setCart(storedCart)
  }, [])

  const updateCart = (updatedCart: any[]) => {
    setCart(updatedCart)
    sessionStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    updateCart(updatedCart)
  }

  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0)
    updateCart(updatedCart)
  }

  const handleRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    updateCart(updatedCart)
  }

  return (
    <Container>
      <h1>{t("cart.title")}</h1>
      {cart.length === 0 ? (
        <p>{t("cart.empty")}</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row className="align-items-center">
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <h5>{t(`${item.name}`)}</h5>
                </Col>
                <Col md={2}>
                  <h5>{`${item.price}${t("currency")}`}</h5>
                </Col>
                <Col md={2}>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </Button>
                </Col>
                <Col md={2}>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    {t("cart.remove")}
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  )
}

export default Cart
