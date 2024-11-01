import { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

// Initialize EmailJS with your user ID
emailjs.init("w4_NTeotCfTVu7JH1");

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Define the parameters for the email template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs
      .send("service_ikms96m", "template_gjbgd32", templateParams)
      .then((response) => {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      })
      .catch((error) => {
        alert("Failed to send email. Please try again later.");
        console.error("FAILED...", error);
      });
  };

  return (
    <Col md={6} className="mb-5 mb-md-0">
      <h2 className="mb-4">Bize Ulaşın</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">İsim</Form.Label>
          <Form.Control
            type="text"
            placeholder="İsminizi giriniz"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">E-Posta</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-Posta adresinizi giriniz"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">Mesajınız</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Mesajınız"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
