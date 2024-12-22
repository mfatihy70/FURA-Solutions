import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import "@/styles/navbar/CartIcon.css";

interface CartIconProps {
  onCollapse?: () => void;
}

const CartIcon = ({ onCollapse }: CartIconProps) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const [productCount, setProductCount] = useState(0);

  const currentLang = lang || i18n.language;

  const updateProductCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count: number = cart.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
    setProductCount(count);
  };

  useEffect(() => {
    updateProductCount();

    const handleCartUpdated = () => {
      updateProductCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, []);

  const handleClick = () => {
    if (onCollapse) onCollapse(); // Collapse navbar
  };

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
  );
};

export default CartIcon;
