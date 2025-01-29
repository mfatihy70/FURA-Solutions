// Load Cart
export const loadCart = (setCart) => {
  const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
  setCart(storedCart)
}

// Update Cart in Local Storage
export const updateCart = (updatedCart, setCart) => {
  setCart(updatedCart)
  localStorage.setItem("cart", JSON.stringify(updatedCart))
  window.dispatchEvent(new Event("cartUpdated"))
}

// Increase Quantity
export const handleIncreaseQuantity = (id, cart, setCart) => {
  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  )
  updateCart(updatedCart, setCart)
}

// Decrease Quantity
export const handleDecreaseQuantity = (id, cart, setCart) => {
  const updatedCart = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0)
  updateCart(updatedCart, setCart)
}

// Remove Item
export const handleRemoveItem = (id, cart, setCart, setToasts, t) => {
  const removedItem = cart.find((item) => item.id === id)
  const updatedCart = cart.filter((item) => item.id !== id)
  updateCart(updatedCart, setCart)

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
    ])
  }
}

// Toast Close Handler
export const handleToastClose = (id, setToasts) => {
  setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
}

// Calculate Total Items
export const calculateTotalItems = (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0)

// Calculate Subtotal
export const calculateSubtotal = (cart) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
