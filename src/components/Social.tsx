import { Container, Row, Col, Button } from "react-bootstrap";

const Social = () => {
  return (
    <Container style={{ marginTop: "5em" }}>
      <Row>
        <Col>
          <h2 className="mb-5">İletişim</h2>
          <Button
            variant="info"
            href="FURA-Solutions/#/contact"
            style={{ backgroundColor: "#00a5e9", fontWeight: "bold" }}
          >
            İletişim
          </Button>
        </Col>
        <Col>
          <h2 className="mb-5">Social</h2>
          <Button
            variant="info"
            href="https://www.linkedin.com/company/fura-makina-end%C3%BCstriyel-%C3%A7%C3%B6z%C3%BCmler-ltd-%C5%9Fti/"
            target="_blank"
            style={{ backgroundColor: "#00a5e9", fontWeight: "bold" }}
          >
            Linkedin
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
