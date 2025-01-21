import express from "express"
import multer from "multer" // For file uploads
import Product from "../models/product.model.js" // Product model

const router = express.Router()

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // Save files to 'uploads/' folder
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`), // Unique filenames
})

const upload = multer({ storage })

// POST Product - Supports both file uploads and paths
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, imagePath } = req.body // Receive name, price, and optional imagePath

    // If an image file is uploaded, use its path; otherwise, use provided imagePath
    const imageUrl = req.file ? req.file.path : imagePath

    // Validate imageUrl
    if (!imageUrl) {
      return res.status(400).json({ msg: "Image is required" })
    }

    // Create new product
    const product = new Product({ name, price, imageUrl })
    await product.save()

    res.status(201).json({ msg: "Product added successfully!" })
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
})

// GET All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find() // Fetch all products
    res.json(products)
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
})

export default router
