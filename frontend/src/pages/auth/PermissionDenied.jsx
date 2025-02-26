import { Container, Row, Col, Alert } from "react-bootstrap"
import { FaBan } from "react-icons/fa"

const PermissionDenied = () => {
  return (
    <Container className="text-center" style={{ padding: "50px" }}>
      <Row>
        <Col>
          <Alert variant="danger">
            <FaBan size={50} />
            <h1>Permission Denied!</h1>
            <p>You do not have access to this page.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default PermissionDenied
