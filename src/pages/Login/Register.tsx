import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

const Register = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6} lg={4} xl={5}>
          <Card
            className="bg-white mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-5 text-center">
                {t("login.register")}
              </h2>
              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder={t("login.placeholder.name")}
                    size="lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder={t("login.placeholder.surname")}
                    size="lg"
                  />
                </Form.Group>

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
                <Form.Group className="mb-4" controlId="formPasswordConfirm">
                  <Form.Control
                    type="password"
                    placeholder={t("login.placeholder.password_confirm")}
                    size="lg"
                  />
                </Form.Group>

                <Link to={`/${lang}/login`}>
                  <Button variant="primary" size="lg" className="w-100 mb-4">
                    {t("login.register")}
                  </Button>
                </Link>

                <br />
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
  );
};

export default Register;
