import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import CartItem from "./CartItem";
import ToastNotification from "@/components/Toast";

const Cart = () => {
  const { t } = useTranslation();

  // State for cart items and toasts
  const [cart, setCart] = useState<any[]>([]);
  const [toasts, setToasts] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart: any[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Handle quantity increase
  const handleIncreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCart);
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = (id: number) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updatedCart);
  };

  // Handle item removal
  const handleRemoveItem = (id: number) => {
    const removedItem = cart.find((item) => item.id === id);
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);

    // Add toast for item removal
    if (removedItem) {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          id: Date.now(),
          message: `${t(removedItem.name)} ${t("cart.removed")}`,
          image: removedItem.image,
          name: removedItem.name,
          type: "danger", // Use "danger" for removal
        },
      ]);
    }
  };

  // Close Toast
  const handleToastClose = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <Container>
      <h2 className="cart-title text-center mb-4">{t("cart.title")}</h2>

      {/* Toast Notifications */}
      <ToastNotification toasts={toasts} onClose={handleToastClose} />

      {/* Cart Content */}
      {cart.length === 0 ? (
        <p className="text-center">{t("cart.empty")}</p>
      ) : (
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id} className="mb-3 p-3">
              <CartItem
                item={item}
                onIncrease={handleIncreaseQuantity}
                onDecrease={handleDecreaseQuantity}
                onRemove={handleRemoveItem}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
