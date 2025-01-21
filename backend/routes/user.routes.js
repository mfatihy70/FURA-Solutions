import express from "express"
import bcrypt from "bcryptjs" // Password encryption
import jwt from "jsonwebtoken" // Token generation
import User from "../models/user.model.js" // User model

const router = express.Router()

// Get All Users Route
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
})

// Register Route
router.post("/register", async (req, res) => {
  const { name, surname, email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" })

    const hashedPassword = await bcrypt.hash(password, 10) // Hash password
    const user = new User({ name, surname, email, password: hashedPassword })
    await user.save() // Save to database

    res.status(201).json({ msg: "User registered successfully!" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
})

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ msg: "User not found" })

    const isMatch = await bcrypt.compare(password, user.password) // Check password
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    }) // Generate token
    res.json({ msg: "Login successful!", token })
  } catch (err) {
      res.status(500).json({ msg: `Server error | ${err}` })
  }
})

export default router
