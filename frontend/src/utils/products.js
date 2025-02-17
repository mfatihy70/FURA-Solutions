import axiosInstance from "./axiosInstance"

export const getProducts = async (setProducts, setError, setLoading) => {
  try {
    const response = await axiosInstance.get("/products")
    setProducts(response.data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const editProduct = async (id, updatedProduct, setError, setLoading) => {
  try {
    await axiosInstance.put(`/products/${id}`, updatedProduct)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const addProduct = async (newProduct, setError, setLoading) => {
  try {
    console.log("Sending Product Data:", newProduct)
    const response = await axiosInstance.post("/products", newProduct)
    return response.data
  } catch (err) {
    console.error("Error Details:", err.response?.data)
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const deleteProduct = async (id, setError, setLoading) => {
  try {
    await axiosInstance.delete(`/products/${id}`)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

// Function to add a product to the cart
export const handleAddToCart = (
  id,
  imageUrl,
  name,
  price,
  addToast,
  toastMessage
) => {
  const productDetails = { id, image: imageUrl, name, price, quantity: 1 }

  // Use getItem instead of getProduct
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")

  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex((item) => item.id === id)
  if (existingProductIndex !== -1) {
    // Increase the quantity of the existing product
    cart[existingProductIndex].quantity += 1
  } else {
    // Add the new product to the cart
    cart.push(productDetails)
  }

  // Use setItem instead of setProduct
  localStorage.setItem("cart", JSON.stringify(cart))

  // Dispatch a custom event to notify about the cart update
  window.dispatchEvent(new Event("cartUpdated"))

  // Create a new toast notification
  const newToast = {
    id: Date.now(),
    message: `${name} ${toastMessage}`, // Use the pre-translated message
    image: imageUrl,
    name,
  }
  addToast(newToast)
}
