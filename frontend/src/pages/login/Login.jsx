import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  Button,
} from "react-bootstrap"

const Login = () => {
  const { t } = useTranslation()
  const { lang } = useParams()

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6} lg={4} xl={5}>
          <Card
            className="bg-white mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <CardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-5 text-center">{t("login.login")}</h2>
              <Form>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder={t("login.placeholder.email")}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder={t("login.placeholder.password")}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formCheckbox">
                  <div className="d-flex justify-content-center">
                    <Form.Check
                      type="checkbox"
                      label={t("login.remember_pw")}
                    />
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-100 mb-4"
                  onClick={() => alert("In development")}
                >
                  {t("login.login")}
                </Button>
                <br />
                <p className="text-center">{t("login.or")}</p>
                <Link to={`/${lang}/register`}>
                  <Button variant="secondary" size="lg" className="w-100">
                    {t("login.register")}
                  </Button>
                </Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
