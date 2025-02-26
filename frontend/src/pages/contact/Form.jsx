import { useState } from "react"
import { Col, Form, Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useFormHandlers } from "@/utils/form"
import CustomModal from "./Modal"

const ContactForm = () => {
  const { t } = useTranslation()
  // State to manage form validation errors
  const [errors, setErrors] = useState({})
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false)
  // State to manage form submission status
  const [status, setStatus] = useState({ success: false, message: "" })
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    receiver: "",
  })

  // Custom hook to handle form data and submission
  const { handleChange, handleSubmit } = useFormHandlers(
    setFormData,
    setErrors,
    setStatus,
    setShowModal
  )

  // Function to create form input fields
  const createFormInput = (
    name,
    type = "text",
    as = "input",
    formData,
    handleChange,
    errors,
    options // Optional options for select
  ) => (
    <Form.Group className="mb-3" key={name}>
      <Form.Label className="text-start w-100 fs-5">
        {t(`form.${name}`)}
      </Form.Label>
      {as === "select" ? (
        <Form.Control
          as={as}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          isInvalid={!!errors[name]}
        >
          <option value="">{t(`form.placeholder.${name}`)}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      ) : (
        <Form.Control
          name={name}
          type={type}
          as={as}
          value={formData[name]}
          placeholder={t(`form.placeholder.${name}`)}
          onChange={handleChange}
          isInvalid={!!errors[name]}
        />
      )}
      {/* Display validation error message */}
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </Form.Group>
  )

  // Configuration for input fields
  const inputConfigs = [
    { name: "name", type: "text", as: "input" },
    { name: "email", type: "email", as: "input" },
    { name: "message", type: "text", as: "textarea" },
    {
      name: "receiver",
      type: "text",
      as: "select",
      options: [
        { value: "fatih", label: "Fatih" },
        { value: "kamuran", label: "Kamuran" },
      ],
    },
  ]

  return (
    <Col md={6} className="mb-5 mb-md-0">
      <h3 className="mb-4">{t("form.title")}</h3>
      <Form onSubmit={(e) => handleSubmit(e, formData)}>
        {inputConfigs.map((config) =>
          createFormInput(
            config.name,
            config.type,
            config.as,
            formData,
            handleChange,
            errors,
            config.options
          )
        )}
        <Button variant="primary" type="submit">
          {t("form.send")}
        </Button>
      </Form>
      {/* Display success or failure message */}
      {status.message && (
        <p className={`mt-3 text-${status.success ? "success" : "danger"}`}>
          {status.message}
        </p>
      )}
      {/* Modal component to display success or failure message */}
      <CustomModal
        show={showModal}
        onHide={() => setShowModal(false)}
        status={status.success ? "success" : "failure"}
        message={status.message}
      />
    </Col>
  )
}

export default ContactForm
