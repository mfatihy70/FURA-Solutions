import bcrypt from "bcryptjs" // Password encryption
import jwt from "jsonwebtoken" // Token generation
import User from "../models/user.model.js" // User model

// Get User by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ msg: "User not found" })
    res.json(user)
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
}

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
}

// Register User
export const registerUser = async (req, res) => {
  const { name, surname, email, password, address, phone } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" })

    const hashedPassword = await bcrypt.hash(password, 10) // Hash password
    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword,
      address,
      phone,
      isAdmin: false, // Set isAdmin to false by default
    })
    await user.save() // Save to database

    res.status(201).json({ msg: "User registered successfully!" })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
}

// Login User
export const loginUser = async (req, res) => {
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
}

// Edit User
export const editUser = async (req, res) => {
  const { id } = req.params
  const { name, surname, email, password, address, phone, isAdmin } = req.body
  try {
    const user = await User.findById(id)
    if (!user) return res.status(404).json({ msg: "User not found" })

    user.name = name || user.name
    user.surname = surname || user.surname
    user.email = email || user.email
    user.address = address || user.address
    user.phone = phone || user.phone
    if (password) {
      user.password = await bcrypt.hash(password, 10) // Hash new password
    }
    if (typeof isAdmin !== "undefined") { // Check if isAdmin is sent in request
      user.isAdmin = isAdmin
    }

    await user.save()
    res.json({ msg: "User updated successfully!", user })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
}

// DELETE user by ID
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ msg: "User not found" })

    await user.remove()
    res.json({ msg: "User deleted successfully!" })
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
}

// DELETE all users
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany()
    res.json({ msg: "All users deleted successfully!" })
  } catch (err) {
    res.status(500).json({ msg: "Server error" })
  }
}
