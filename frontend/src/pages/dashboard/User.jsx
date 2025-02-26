import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap"
import { Link, useParams, useNavigate } from "react-router-dom"
import EditUser from "./EditUser"
import { useTranslation } from "react-i18next"

const UserDashboard = ({ userName }) => {
  const { lang } = useParams()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [logoutMessage, setLogoutMessage] = useState(null)

  useEffect(() => {
    // Listen for token changes in localStorage
    const checkToken = () => {
      setToken(localStorage.getItem("token"))
    }

    window.addEventListener("storage", checkToken)
    return () => window.removeEventListener("storage", checkToken)
  }, [])

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token") // Clear token
    localStorage.removeItem("isAdmin") // Clear admin flag if present
    setLogoutMessage({ type: "success", text: "Logged out successfully" }) // Show success message

    setTimeout(() => {
      navigate(`/${lang}/login`) // Redirect to login page
    }, 2000) // Delay for user to see the message
  }

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Row className="justify-content-center mt-4">
        <Col md={8} lg={6}>
          <h2 className="text-center">Welcome to Your Dashboard, {userName}</h2>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        {token ? (
          <>
            <Col md={6} lg={5}>
              <EditUser />
            </Col>
            <Col md={6} lg={5}>
              <Card
                className="bg-white mx-auto m-4"
                style={{ borderRadius: "1rem" }}
              >
                <Card.Body className="p-5 w-100 d-flex flex-column">
                  <Card.Title className="text-center">Your Cart</Card.Title>
                  <p>Cart items will be displayed here.</p>
                </Card.Body>
              </Card>
            </Col>
          </>
        ) : (
          <Col md={6} lg={5}>
            <Link to={`/${lang}/login`}>
              <Button variant="primary" size="md">
                {t("login.login")}
              </Button>
            </Link>
          </Col>
        )}
      </Row>

      {/* Logout Message */}
      {logoutMessage && (
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Alert variant={logoutMessage.type} className="text-center">
              {logoutMessage.text}
            </Alert>
          </Col>
        </Row>
      )}

      {/* Logout Button (Only Visible If Logged In) */}
      {token && (
        <Row className="justify-content-center">
          <Col md={6} lg={5} className="text-center">
            <Button variant="danger" size="lg" onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default UserDashboard
