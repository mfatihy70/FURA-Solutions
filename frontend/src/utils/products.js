// Function to fetch products from the backend
export const fetchProducts = async (setProducts, setLoading) => {
  try {
    const response = await fetch("http://localhost:5000/api/products") // Replace with your backend API URL
    const data = await response.json()
    console.log("Fetched products:", data) // Log the response to verify its structure
    if (Array.isArray(data)) {
      setProducts(data) // Update products state
    } else if (data.data && Array.isArray(data.data)) {
      setProducts(data.data) // Handle nested data structure
    } else {
      console.error("Unexpected response format:", data)
    }
    setLoading(false) // Stop loading
  } catch (error) {
    console.error("Error fetching products:", error)
    setLoading(false) // Stop loading even if there's an error
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
