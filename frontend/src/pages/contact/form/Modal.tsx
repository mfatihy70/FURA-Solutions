import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import React from "react"
import { useTranslation } from "react-i18next"
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

// Interface for CustomModal props
interface CustomModalProps {
  show: boolean
  onHide: () => void
  status: "success" | "failure"
  message: string
}

// CustomModal component
const CustomModal: React.FC<CustomModalProps> = ({
  show,
  onHide,
  status,
  message,
}) => {
  const { t } = useTranslation()

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex align-items-center"
        >
          {/* Conditionally render success or failure icon */}
          {status === "success" ? (
            <FaCheckCircle size={30} color="green" className="me-2" />
          ) : (
            <FaTimesCircle size={30} color="red" className="me-2" />
          )}
          {/* Conditionally render success or failure title */}
          {status === "success"
            ? t("form.emailSuccess.title")
            : t("form.emailFailure.title")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <p>{message}</p> {/* Display the message */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          {t("close")} {/* Close button */}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
