import React from "react"
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap"
import EditUser from "./EditUser"

const UserDashboard = ({ userName }) => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col md={8} lg={6}>
          <h2 className="text-center">Welcome to Your Dashboard, {userName}</h2>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} lg={5}>
          <EditUser />
        </Col>
        <Col md={6} lg={5}>
          <Card
            className="bg-white mx-auto mb-4"
            style={{ borderRadius: "1rem" }}
          >
            <Card.Body className="p-5 w-100 d-flex flex-column">
              <Card.Title className="text-center">Your Cart</Card.Title>
              {/* Add your cart items here */}
              <p>Cart items will be displayed here.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UserDashboard
