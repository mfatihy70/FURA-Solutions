import { Toast, ToastContainer } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import "@/styles/products/Toast.css"

interface ToastNotificationProps {
  toasts: { id: number; message: string; image: string; name: string }[]
  onClose: (id: number) => void
}

const ToastNotification = ({ toasts, onClose }: ToastNotificationProps) => {
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
          bg="success"
          className="toast"
        >
          <Toast.Header closeButton className="toast-header">
            <strong className="me-auto">{t("cart.title")}</strong>
          </Toast.Header>
          <Toast.Body className="toast-body">
            <img src={toast.image} alt={toast.name} />
            <span>{toast.message}</span>
            <Link to="/lang/cart" className="btn btn-success mt-2">
              {t("cart.showCart")}
            </Link>
          </Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  )
}

export default ToastNotification
