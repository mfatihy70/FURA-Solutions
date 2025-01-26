import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import userRoutes from "./routes/user.routes.js"
import productRoutes from "./routes/product.routes.js"

dotenv.config()
connectDB()
const app = express()

// Middleware
app.use(express.json()) // Parse JSON bodies
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your React app's URL
  })
)

// Routes
app.use("/api/users", userRoutes) // User routes
app.use("/api/products", productRoutes) // Product routes

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
)
