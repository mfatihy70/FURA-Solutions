import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { FaShoppingCart } from "react-icons/fa"
import { useEffect, useState } from "react"
import "@/styles/navbar/CartIcon.css"

const CartIcon = (onCollapse) => {
  const { i18n } = useTranslation()
  const { lang } = useParams()
  const [productCount, setProductCount] = useState(0)

  // Determine the current language from URL params or i18n
  const currentLang = lang || i18n.language

  // Function to update the product count from local storage
  const updateProductCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const count = cart.reduce((acc, item) => acc + item.quantity, 0)
    setProductCount(count)
  }

  // Event listener to handle cart updates
  const handleCartUpdated = () => {
    updateProductCount()
  }

  // useEffect to update product count on component mount and when cart updates
  useEffect(() => {
    updateProductCount()
    window.addEventListener("cartUpdated", handleCartUpdated)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated)
    }
  }, [])

  // Handle click to collapse navbar if onCollapse prop is provided
  const handleClick = () => {
    if (onCollapse) onCollapse()
  }

  return (
    <Link
      to={`/${currentLang}/cart`}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={handleClick}
    >
      <div className="cart-container">
        <FaShoppingCart size={24} className="cart-icon m-3" />
        {productCount > 0 && <span className="cart-badge">{productCount}</span>}
      </div>
    </Link>
  )
}

export default CartIcon
