import axios from "axios"

export const manageUsers = async (id, user) => {
  try {
    const response = await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        surname: user.surname,
        email: user.email,
        address: user.address,
        phone: user.phone,
        isAdmin: user.isAdmin,
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to update user with ID ${id}`)
    }

    const data = await response.json()
    console.log("Updated user:", data)
    return data
  } catch (error) {
    console.error("Error updating user:", error)
    throw new Error("Error updating user")
  }
}

export const fetchUsers = async (setUsers, setLoading, setError) => {
  try {
    const response = await fetch("http://localhost:5000/api/users") // Replace with your backend API URL
    const data = await response.json()
    console.log("Fetched users:", data) // Log the response to verify its structure
    if (Array.isArray(data)) {
      setUsers(data) // Update users state
    } else if (data.data && Array.isArray(data.data)) {
      setUsers(data.data) // Handle nested data structure
    } else {
      console.error("Unexpected response format:", data)
      setError("Unexpected response format")
    }
    setLoading(false) // Stop loading
  } catch (error) {
    console.error("Error fetching users:", error)
    setError("Error fetching users")
    setLoading(false) // Stop loading even if there's an error
  }
}


export const handleLogin = async (
  email,
  password,
  setError,
  navigate,
  lang
) => {
  try {
    const res = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    })
    alert(res.data.msg) // Show success message
    localStorage.setItem("token", res.data.token) // Save token to localStorage

    const isAdmin = res.data.isAdmin // Retrieve isAdmin value
    if (isAdmin) {
      navigate(`/${lang}/admin`) // Redirect to admin dashboard
    } else {
      navigate(`/${lang}/dashboard`) // Redirect to user dashboard
    }
  } catch (err) {
    setError(err.response?.data?.msg || "Something went wrong " + err)
  }
}

// Function to handle user registration
export const handleRegister = async (
  name,
  surname,
  email,
  password,
  confirmPassword,
  address,
  phone,
  setError,
  navigate,
  lang
) => {
  if (password !== confirmPassword) {
    setError("Passwords do not match")
    return
  }
  try {
    const res = await axios.post("http://localhost:5000/api/users/register", {
      name,
      surname,
      email,
      password,
      address,
      phone,
      isAdmin: false, // Set isAdmin to false by default
    })
    alert(res.data.msg) // Show success message
    navigate(`/${lang}/login`) // Redirect to login page
  } catch (err) {
    setError(err.response?.data?.msg || "Something went wrong")
  }
}
