import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import { handleLogin } from "@/utils/auth"

const Login = () => {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState(null)

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Row>
        <Col>
          <Card
            className="bg-white mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column">
              <h3 className="mb-5 text-center">{t("login.login")}</h3>

              {message && <Alert variant={message.type}>{message.text}</Alert>}
              {!message && error && (
                <Alert variant={error.type}>{error.text}</Alert>
              )}

              <Form>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder={t("login.placeholder.email")}
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder={t("login.placeholder.password")}
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mb-4"
                  onClick={() =>
                    handleLogin(
                      email,
                      password,
                      setError,
                      setMessage,
                      navigate,
                      lang
                    )
                  }
                >
                  {t("login.login")}
                </Button>
                <p className="text-center">{t("login.or")}</p>
                <Link to={`/${lang}/register`}>
                  <Button variant="secondary" size="lg" className="w-100">
                    {t("login.register")}
                  </Button>
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
