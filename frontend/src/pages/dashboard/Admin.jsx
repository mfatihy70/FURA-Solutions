import { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Button,
  Alert,
} from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import {
  FaUserEdit,
  FaBoxOpen,
  FaHandshake,
  FaImages,
  FaUsers,
} from "react-icons/fa"
import EditUser from "./EditUser"
import EditCarousel from "./admin/Carousel"
import ManagePartners from "./admin/Partners"
import ManageUsers from "./admin/Users"
import EditProducts from "./admin/Products"

const AdminDashboard = ({ adminName }) => {
  const { lang } = useParams()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  const [logoutMessage, setLogoutMessage] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))

  const handleShowModal = (content) => {
    setModalContent(content)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token") // Remove token
    localStorage.removeItem("isAdmin") // Remove admin flag
    setLogoutMessage({ type: "success", text: "Logged out successfully" }) // Show message

    setTimeout(() => {
      setToken(null) // Update token state after delay
      navigate(`/${lang}/login`) // Redirect to login page
    }, 2000)
  }

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Row className="justify-content-center mt-4">
        <Col md={8} lg={6}>
          <h2 className="text-center">
            Welcome to Admin Dashboard, {adminName}
          </h2>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="bg-white mx-auto hover-card"
            style={{ borderRadius: "1rem" }}
            onClick={() => handleShowModal("editUserInfo")}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column align-items-center">
              <FaUserEdit size={50} className="mb-3" />
              <Card.Title className="text-center">
                Admin User Information
              </Card.Title>
              <p>Click to edit admin user information.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="bg-white mx-auto hover-card"
            style={{ borderRadius: "1rem" }}
            onClick={() => handleShowModal("editProducts")}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column align-items-center">
              <FaBoxOpen size={50} className="mb-3" />
              <Card.Title className="text-center">
                Edit Available Products
              </Card.Title>
              <p>Click to edit available products.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="bg-white mx-auto hover-card"
            style={{ borderRadius: "1rem" }}
            onClick={() => handleShowModal("managePartners")}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column align-items-center">
              <FaHandshake size={50} className="mb-3" />
              <Card.Title className="text-center">Manage Partners</Card.Title>
              <p>Click to manage partners.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="bg-white mx-auto hover-card"
            style={{ borderRadius: "1rem" }}
            onClick={() => handleShowModal("editCarousel")}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column align-items-center">
              <FaImages size={50} className="mb-3" />
              <Card.Title className="text-center">
                Edit Carousel Images
              </Card.Title>
              <p>Click to edit carousel images.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={5} className="mb-4">
          <Card
            className="bg-white mx-auto hover-card"
            style={{ borderRadius: "1rem" }}
            onClick={() => handleShowModal("registeredUsers")}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column align-items-center">
              <FaUsers size={50} className="mb-3" />
              <Card.Title className="text-center">Registered Users</Card.Title>
              <p>Click to view registered users.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for Editing Admin Features */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalContent === "editUserInfo" && "Edit Admin Information"}
            {modalContent === "editCarousel" && "Manage Carousel"}
            {modalContent === "editProducts" && "Edit Products"}
            {modalContent === "manageUsers" && "Manage Users"}
            {modalContent === "managePartners" && "Manage Partners"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent === "editUserInfo" && <EditUser />}
          {modalContent === "editProducts" && <EditProducts />}
          {modalContent === "managePartners" && <ManagePartners />}
          {modalContent === "editCarousel" && <EditCarousel />}
          {modalContent === "registeredUsers" && <ManageUsers />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Logout Message (Appears Above Logout Button) */}
      {logoutMessage && (
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Alert variant={logoutMessage.type} className="text-center">
              {logoutMessage.text}
            </Alert>
          </Col>
        </Row>
      )}

      {/* Logout Button (Only Shown If Logged In) */}
      {token && (
        <Row className="justify-content-center mt-4">
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

export default AdminDashboard
