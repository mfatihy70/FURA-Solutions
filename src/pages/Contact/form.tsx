import { Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Col md={6} className="mb-5 mb-md-0">
      <h2 className="mb-4">Bize Ulaşın</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">İsim</Form.Label>
          <Form.Control type="text" placeholder="İsminizi giriniz" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">E-Posta</Form.Label>
          <Form.Control type="email" placeholder="E-Posta adresinizi giriniz" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">Mesajınız</Form.Label>{" "}
          <Form.Control as="textarea" rows={3} placeholder="Mesajınız" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
