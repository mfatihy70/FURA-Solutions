import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaShoppingCart } from "react-icons/fa"
import { useEffect, useState } from "react"
import "@/styles/navbar/CartIcon.css"

const CartIcon = () => {
  const { i18n } = useTranslation()
  const { lang } = useParams()
  const [productCount, setProductCount] = useState(0)

  // Ensure we have a language, fallback to current i18n language
  const currentLang = lang || i18n.language

  // Function to update the product count
  const updateProductCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const count = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    )
    setProductCount(count)
  }

  // Retrieve the product count from local storage on component mount
  useEffect(() => {
    updateProductCount()

    // Listen for custom cartUpdated event
    const handleCartUpdated = () => {
      updateProductCount()
    }

    window.addEventListener("cartUpdated", handleCartUpdated)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated)
    }
  }, [])

  return (
    <Link
      to={`/${currentLang}/cart`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="cart-container">
        <FaShoppingCart size={24} className="cart-icon m-3" />
        {productCount > 0 && <span className="cart-badge">{productCount}</span>}
      </div>
    </Link>
  )
}

export default CartIcon
