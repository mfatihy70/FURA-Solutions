import { Toast, ToastContainer } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "@/styles/products/Toast.css"

const ToastNotification = ({ toasts, onClose }) => {
  const { t } = useTranslation()

  return (
    <ToastContainer className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => onClose(toast.id)}
          show={true}
          delay={3000}
          autohide
          bg={toast.type === "danger" ? "danger" : "success"}
          className={`toast ${toast.type === "danger" ? "toast-danger" : ""}`}
        >
          <Toast.Header closeButton className="toast-header">
            <strong className="me-auto">
              {toast.type === "danger"
                ? t("cart.remove.title")
                : t("cart.add.title")}
            </strong>
          </Toast.Header>
          <Toast.Body className="toast-body">
            <img src={toast.image} alt={toast.name} />
            <span>{toast.message}</span>
            {toast.type !== "danger" && (
              <Link to="/lang/cart" className="btn btn-success m-2">
                {t("cart.showCart")}
              </Link>
            )}
          </Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}

export default ToastNotification
