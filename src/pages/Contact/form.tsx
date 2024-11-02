import { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

// Initialize EmailJS with your user ID
emailjs.init("w4_NTeotCfTVu7JH1");

const ContactForm = () => {
  const { t } = useTranslation();

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
        alert(t("email_success"));
        console.log("SUCCESS!", response.status, response.text);
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      })
      .catch((error) => {
        alert(t("email_error"));
        console.error("FAILED...", error);
      });
  };

  return (
    <Col md={6} className="mb-5 mb-md-0">
      <h2 className="mb-4">{t("form.title")}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">
            {t("form.name")}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder={t("form.placeholders.name")}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">
            {t("form.email")}
          </Form.Label>
          <Form.Control
            type="email"
            placeholder={t("form.placeholders.email")}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-start w-100 fs-5">
            {t("form.message")}
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={t("form.placeholders.message")}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {t("form.send")}
        </Button>
      </Form>
    </Col>
  );
};

export default ContactForm;
