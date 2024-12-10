import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaShoppingCart } from "react-icons/fa"
import "@/styles/navbar/CartIcon.css"

const CartIcon = () => {
  const { i18n } = useTranslation()
  const { lang } = useParams()

  // Ensure we have a language, fallback to current i18n language
  const currentLang = lang || i18n.language

  return (
    <Link
      to={`/${currentLang}/cart`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaShoppingCart size={24} className="cart-icon m-3" />
      </div>
    </Link>
  )
}

export default CartIcon
