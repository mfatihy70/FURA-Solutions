import { useState } from "react"
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap"
import {
  FaUserEdit,
  FaBoxOpen,
  FaHandshake,
  FaImages,
  FaUsers,
} from "react-icons/fa"
import EditUser from "./EditUser"
import "@/styles/Admin.css"

const AdminDashboard = ({ adminName }) => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const handleShowModal = (content) => {
    setModalContent(content)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8} lg={6}>
          <h2 className="text-center">
            Welcome to Admin Dashboard, {adminName}
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} lg={5}>
          <Card
            className="bg-white mx-auto mb-4 hover-card"
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
        <Col md={6} lg={5}>
          <Card
            className="bg-white mx-auto mb-4 hover-card"
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
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} lg={5}>
          <Card
            className="bg-white mx-auto mb-4 hover-card"
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
        <Col md={6} lg={5}>
          <Card
            className="bg-white mx-auto mb-4 hover-card"
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
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} lg={5}>
          <Card
            className="bg-white mx-auto mb-4 hover-card"
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalContent === "editUserInfo" && "Edit Admin User Information"}
            {modalContent === "editProducts" && "Edit Available Products"}
            {modalContent === "managePartners" && "Manage Partners"}
            {modalContent === "editCarousel" && "Edit Carousel Images"}
            {modalContent === "registeredUsers" && "Registered Users"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent === "editUserInfo" && <EditUser />}
          {modalContent === "editProducts" && (
            <p>Product editing functionality will be displayed here.</p>
          )}
          {modalContent === "managePartners" && (
            <p>Partner management functionality will be displayed here.</p>
          )}
          {modalContent === "editCarousel" && (
            <p>Carousel image editing functionality will be displayed here.</p>
          )}
          {modalContent === "registeredUsers" && (
            <p>Registered users will be displayed here.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default AdminDashboard
