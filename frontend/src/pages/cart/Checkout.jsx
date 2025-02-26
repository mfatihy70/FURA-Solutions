import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const Checkout = () => {
  const { t } = useTranslation()
  const { lang } = useParams()
  const [cart, setCart] = useState([])
  const [shippingCost, setShippingCost] = useState(5.99)

  // Fetch cart from localStorage
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart")
      if (storedCart) {
        setCart(JSON.parse(storedCart))
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
    }

    window.scrollTo(0, 0)
  }, [])

  // Calculate totals
  const calculateTotalItems = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const calculateSubtotal = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  const totalItems = calculateTotalItems(cart)
  const subtotal = calculateSubtotal(cart)
  const totalPrice = subtotal + (subtotal > 0 ? shippingCost : 0)

  return (
    <Container className="py-4 min-vh-100">
      <h1 className="mb-4">{t("checkout.title")}</h1>

      {/* 2x2 Grid Layout */}
      <Row className="g-4">
        {/* Top Left: Checkout Items */}
        <Col lg={6} className="d-flex">
          <Card className="flex-fill shadow-sm">
            <Card.Header className="bg-light">
              <h2 className="h5 mb-0">{t("checkout.items")}</h2>
            </Card.Header>
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item key={item.id} className="py-3">
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <Image src={item.image} alt={item.name} fluid thumbnail />
                    </Col>
                    <Col xs={9} md={10}>
                      <Row>
                        <Col md={8}>
                          <h3 className="h6 mb-0">{item.name}</h3>
                          <small className="text-muted">
                            {t("cart.itemCount")}: {item.quantity}
                          </small>
                        </Col>
                        <Col md={4} className="text-end">
                          <span className="fw-bold">
                            {`${t("currency")}${(
                              item.price * item.quantity
                            ).toFixed(2)}`}
                          </span>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>

        {/* Top Right: Order Summary */}
        <Col lg={6} className="d-flex">
          <Card className="flex-fill shadow-sm">
            <Card.Header className="bg-light">
              <h2 className="h5 mb-0">{t("cart.overview")}</h2>
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between">
                <span>{t("cart.itemCount")}</span>
                <span>{totalItems}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>{t("cart.subtotal")}</span>
                <span>{`${t("currency")}${subtotal.toFixed(2)}`}</span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between">
                <span>{t("cart.shipping")}</span>
                <span>
                  {subtotal > 0
                    ? `${t("currency")}${shippingCost.toFixed(2)}`
                    : t("cart.free")}
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between fw-bold">
                <span>{t("cart.total")}</span>
                <span>{`${t("currency")}${totalPrice.toFixed(2)}`}</span>
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <DropdownButton
                id="dropdown-basic-button"
                title={t("checkout.placeOrder")}
                className="w-100"
              >
                <Dropdown.Item href="#/action-1">Fatih</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Kamuran</Dropdown.Item>
              </DropdownButton>
              <div className="text-center mt-3">
                <Link
                  to={`/${lang}/cart`}
                  className="btn btn-outline-secondary"
                >
                  {t("checkout.backToCart")}
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Bottom Left: Customer Details */}
        <Col lg={6} className="d-flex">
          <Card className="flex-fill shadow-sm">
            <Card.Header className="bg-light">
              <h2 className="h5 mb-0">{t("checkout.customerDetails")}</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="firstName">
                      <Form.Label className="text-start w-100">
                        {t("checkout.firstName")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("checkout.firstNamePlaceholder")}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="lastName">
                      <Form.Label className="text-start w-100">
                        {t("checkout.lastName")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("checkout.lastNamePlaceholder")}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="text-start w-100">
                    {t("checkout.email")}
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={t("checkout.emailPlaceholder")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label className="text-start w-100">
                    {t("checkout.phone")}
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder={t("checkout.phonePlaceholder")}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label className="text-start w-100">
                    {t("checkout.address")}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={t("checkout.addressPlaceholder")}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="city">
                      <Form.Label className="text-start w-100">
                        {t("checkout.city")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("checkout.cityPlaceholder")}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group controlId="postalCode">
                      <Form.Label className="text-start w-100">
                        {t("checkout.postalCode")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("checkout.postalCodePlaceholder")}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mb-3">
                    <Form.Group controlId="country">
                      <Form.Label className="text-start w-100">
                        {t("checkout.country")}
                      </Form.Label>
                      <Form.Control as="select" required>
                        <option value="">{t("checkout.selectCountry")}</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="UK">United Kingdom</option>
                        <option value="US">United States</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Bottom Right: Message to Seller */}
        <Col lg={6} className="d-flex">
          <Card className="flex-fill shadow-sm">
            <Card.Header className="bg-light">
              <h2 className="h5 mb-0">{t("checkout.messageToSeller")}</h2>
            </Card.Header>
            <Card.Body>
              <Form.Group controlId="messageToSeller">
                <Form.Label className="text-start w-100">
                  {t("checkout.messageToSeller")}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={t("checkout.messageToSellerPlaceholder")}
                />
                <Form.Text className="text-muted">
                  {t("checkout.messageToSellerHelp")}
                </Form.Text>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout
