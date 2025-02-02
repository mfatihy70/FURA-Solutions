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

export const editCarouselItem = async (id, item) => {
  try {
    const response = await fetch(`http://localhost:5000/api/carousel/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: item.title,
        subtitle: item.subtitle,
        imageUrl: item.imageUrl,
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to update item with ID ${id}`)
    }

    const data = await response.json()
    console.log("Updated carousel item:", data)
    return data
  } catch (error) {
    console.error("Error updating carousel item:", error)
    throw new Error("Error updating carousel item")
  }
}
