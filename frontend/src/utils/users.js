import axios from "axios"

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
