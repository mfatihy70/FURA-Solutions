import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { handleRegister } from "@/utils/users"

const Register = () => {
  const { t } = useTranslation()
  const { lang } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")

  const handleRegisterClick = () => {
    handleRegister(
      name,
      surname,
      email,
      password,
      confirmPassword,
      address,
      phone,
      setError,
      navigate,
      lang
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card
            className="bg-white mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column">
              <h3 className="mb-5 text-center">{t("login.register")}</h3>
              {error && <p className="text-danger text-center">{error}</p>}
              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder={t("login.placeholder.name")}
                    size="lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formSurname">
                  <Form.Control
                    type="text"
                    placeholder={t("login.placeholder.surname")}
                    size="lg"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </Form.Group>
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
                <Form.Group className="mb-4" controlId="formPasswordConfirm">
                  <Form.Control
                    type="password"
                    placeholder={t("login.placeholder.passwordConfirm")}
                    size="lg"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formAddress">
                  <Form.Control
                    type="text"
                    placeholder={t("login.placeholder.address")}
                    size="lg"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formPhone">
                  <Form.Control
                    type="text"
                    placeholder={t("login.placeholder.phone")}
                    size="lg"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mb-4"
                  onClick={handleRegisterClick}
                >
                  {t("login.register")}
                </Button>
                <p className="text-center">{t("login.or")}</p>
                <Link to={`/${lang}/login`}>
                  <Button variant="secondary" size="lg" className="w-100">
                    {t("login.login")}
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

export default Register
