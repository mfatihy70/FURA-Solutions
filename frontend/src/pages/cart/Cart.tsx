import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap"

const Cart = () => {
  const { t } = useTranslation()
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(storedCart)
  }, [])

  const updateCart = (updatedCart: any[]) => {
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    window.dispatchEvent(new Event("cartUpdated"))
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
      <br />
      {cart.length === 0 ? (
        <p>{t("cart.empty")}</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row className="align-items-center">
                {/* Left Section: Image */}
                <Col xs={4} sm={3}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fluid
                    rounded
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                {/* Center Section: Details */}
                <Col xs={6} sm={6} className="d-flex flex-column">
                  <h5 className="mb-2" style={{ fontSize: "1.2rem" }}>
                    {t(`${item.name}`)}
                  </h5>
                  <h6
                    className="text-muted mb-3"
                    style={{ fontSize: "1.2rem" }}
                  >
                    {`${item.price}${t("currency")}`}
                  </h6>
                  <div className="d-flex align-items-center justify-content-center">
                    <Button
                      variant="outline-secondary"
                      className="mx-3"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </Button>
                    <span style={{ fontSize: "1.2rem" }}>{item.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      className="m-3"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </Col>

                {/* Right Section: Delete Button */}
                <Col xs={2}>
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
