import axios from "axios"

const axiosInstance = axios.create({
  // Dev
  // baseURL: "http://localhost:5000/api",
  // Prod
  baseURL: "https://fura-solutions-backend.onrender.com/api",
})

export default axiosInstance
