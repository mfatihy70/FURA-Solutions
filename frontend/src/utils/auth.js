import axiosInstance from "./axiosInstance"

export const getUsers = async (setUsers, setLoading, setError) => {
  try {
    const response = await axiosInstance.get("/users")
    setUsers(response.data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const editUser = async (id, updatedUser, setError, setLoading) => {
  try {
    await axiosInstance.put(`/users/${id}`, updatedUser)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

export const deleteUser = async (id, setError, setLoading) => {
  try {
    await axiosInstance.delete(`/users/${id}`)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

// Handle user login
export const handleLogin = async (
  email,
  password,
  setError,
  setMessage,
  navigate,
  lang
) => {
  try {
    // Clear old session data before new login
    localStorage.removeItem("token")
    localStorage.removeItem("isAdmin")

    const res = await axiosInstance.post("/users/login", {
      email,
      password,
    })

    setMessage({ type: "success", text: res.data.msg })

    localStorage.setItem("token", res.data.token)
    localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin))

    setTimeout(() => {
      if (res.data.isAdmin) {
        navigate(`/${lang}/admin`)
      } else {
        navigate(`/${lang}/dashboard`)
      }
    }, 2000) // Delay for user to see the message
  } catch (err) {
    setError({
      type: "danger",
      text: err.response?.data?.msg || "Something went wrong " + err,
    })
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
  setMessage,
  navigate,
  lang
) => {
  if (password !== confirmPassword) {
    setError({ type: "danger", text: "Passwords do not match" })
    return
  }
  try {
    const res = await axiosInstance.post("/users/register", {
      name,
      surname,
      email,
      password,
      address,
      phone,
      isAdmin: false, // Set isAdmin to false by default
    })

    setMessage({ type: "success", text: res.data.msg })

    setTimeout(() => {
      navigate(`/${lang}/login`)
    }, 2000)
  } catch (err) {
    setError({
      type: "danger",
      text: err.response?.data?.msg || "Something went wrong",
    })
  }
}
