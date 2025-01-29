import axios from "axios"

// Function to handle user login
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
    navigate(`/${lang}/dashboard`) // Redirect to dashboard
  } catch (err) {
    setError(err.response?.data?.msg || "Something went wrong")
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
