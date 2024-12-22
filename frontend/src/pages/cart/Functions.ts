import { Dispatch, SetStateAction } from "react";
import { TFunction } from "i18next";

export const loadCart = (setCart: Dispatch<SetStateAction<any[]>>) => {
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
  setCart(storedCart);
};

export const updateCart = (
  updatedCart: any[],
  setCart: Dispatch<SetStateAction<any[]>>
) => {
  setCart(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.dispatchEvent(new Event("cartUpdated"));
};

export const handleIncreaseQuantity = (
  id: number,
  cart: any[],
  setCart: Dispatch<SetStateAction<any[]>>
) => {
  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  );
  updateCart(updatedCart, setCart);
};

export const handleDecreaseQuantity = (
  id: number,
  cart: any[],
  setCart: Dispatch<SetStateAction<any[]>>
) => {
  const updatedCart = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
  updateCart(updatedCart, setCart);
};

export const handleRemoveItem = (
  id: number,
  cart: any[],
  setCart: Dispatch<SetStateAction<any[]>>,
  setToasts: Dispatch<SetStateAction<any[]>>,
  t: TFunction
) => {
  const removedItem = cart.find((item) => item.id === id);
  const updatedCart = cart.filter((item) => item.id !== id);
  updateCart(updatedCart, setCart);

  // Add toast for item removal
  if (removedItem) {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: Date.now(),
        message: `${t(removedItem.name)} ${t("cart.remove.ed")}`,
        image: removedItem.image,
        name: removedItem.name,
        type: "danger",
      },
    ]);
  }
};

export const handleToastClose = (
  id: number,
  setToasts: Dispatch<SetStateAction<any[]>>
) => {
  setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
};

export const calculateTotalItems = (cart: any[]) => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const calculateSubtotal = (cart: any[]) => {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
