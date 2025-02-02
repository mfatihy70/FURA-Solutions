export const fetchPartners = async (setPartners, setLoading, setError) => {
  try {
    const response = await fetch("http://localhost:5000/api/partners") // Replace with your backend API URL
    const data = await response.json()
    console.log("Fetched partners:", data) // Log the response to verify its structure
    if (Array.isArray(data)) {
      setPartners(data) // Update partners state
    } else if (data.data && Array.isArray(data.data)) {
      setPartners(data.data) // Handle nested data structure
    } else {
      console.error("Unexpected response format:", data)
      setError("Unexpected response format")
    }
    setLoading(false) // Stop loading
  } catch (error) {
    console.error("Error fetching partners:", error)
    setError("Error fetching partners")
    setLoading(false) // Stop loading even if there's an error
  }
}

export const managePartners = async (id, partner) => {
  try {
    const response = await fetch(`http://localhost:5000/api/partners/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: partner.imageUrl,
        link: partner.link,
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to update partner with ID ${id}`)
    }

    const data = await response.json()
    console.log("Updated partner:", data)
    return data
  } catch (error) {
    console.error("Error updating partner:", error)
    throw new Error("Error updating partner")
  }
}
