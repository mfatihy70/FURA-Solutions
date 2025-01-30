export const fetchCarouselItems = async (
  setCarouselItems,
  setLoading,
  setError
) => {
  try {
    const response = await fetch("http://localhost:5000/api/carousel") // Replace with your backend API URL
    const data = await response.json()
    console.log("Fetched carousel items:", data) // Log the response to verify its structure
    if (Array.isArray(data)) {
      setCarouselItems(data) // Update carousel items state
    } else if (data.data && Array.isArray(data.data)) {
      setCarouselItems(data.data) // Handle nested data structure
    } else {
      console.error("Unexpected response format:", data)
      setError("Unexpected response format")
    }
    setLoading(false) // Stop loading
  } catch (error) {
    console.error("Error fetching carousel items:", error)
    setError("Error fetching carousel items")
    setLoading(false) // Stop loading even if there's an error
  }
}
