import { Navigate, useParams } from "react-router-dom"

const ProtectedAdminRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin") || "false") // Avoid JSON.parse errors
  const { lang } = useParams()

  if (!token || !isAdmin) {
    return <Navigate to={`/${lang}/permission-denied`} replace />
  }

  return children
}

export default ProtectedAdminRoute
