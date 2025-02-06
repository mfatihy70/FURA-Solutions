import axios from "axios"
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
export const handleLogin = async (email, password, setError, navigate, lang) => {
  try {
    // ✅ Clear old session data before new login
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");

    const res = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    });

    alert(res.data.msg);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("isAdmin", JSON.stringify(res.data.isAdmin));

    if (res.data.isAdmin) {
      navigate(`/${lang}/admin`);
    } else {
      navigate(`/${lang}/dashboard`);
    }
  } catch (err) {
    setError(err.response?.data?.msg || "Something went wrong " + err);
  }
};


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
