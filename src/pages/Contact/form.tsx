import { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { t } = useTranslation();

  // State to track form submission status
  const [status, setStatus] = useState({ success: false, message: "" });

  // State to manage form data
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Update the form data with the new value
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    emailjs.init("w4_NTeotCfTVu7JH1");
    emailjs
      .send("service_ikms96m", "template_cttbgcc", formData)
      .then(() => {
        // Set the status to success and clear the form
        setStatus({ success: true, message: t("form.emailSuccess") });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        // Set the status to failure and log the error
        setStatus({ success: false, message: t("form.emailError") });
        console.error("Email send failed:", error);
      });
  };

  // Function to render a form input field
  const renderInput = (
    name: string,
    type: string = "text",
    as: React.ElementType = "input"
  ) => (
    <Form.Group className="mb-3">
      <Form.Label className="text-start w-100 fs-5">
        {t(`form.${name}`)}
      </Form.Label>
      <Form.Control
        as={as}
        type={type}
        name={name}
        value={formData[name]}
        placeholder={t(`form.placeholder.${name}`)}
        onChange={handleChange}
      />
    </Form.Group>
  );

  return (
    // Return the form with input fields and a submit button
    <Col md={6} className="mb-5 mb-md-0">
      <h2 className="mb-4">{t("form.title")}</h2>
      <Form onSubmit={handleSubmit}>
        {renderInput("name")}
        {renderInput("email", "email")}
        {renderInput("message", "text", "textarea")}
        <Button variant="primary" type="submit">
          {t("form.send")}
        </Button>
      </Form>
      {/* Display the status message if it exists */}
      {status.message && (
        <p className={`mt-3 text-${status.success ? "success" : "danger"}`}>
          {status.message}
        </p>
      )}
    </Col>
  );
};

export default ContactForm;
