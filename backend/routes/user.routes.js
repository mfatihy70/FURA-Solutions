import express from "express"
import {
  getAllUsers,
  registerUser,
  loginUser,
  deleteAllUsers,
  editUser,
  getUserById
} from "../controllers/user.controller.js" // Import controller functions

const router = express.Router()

router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.put("/:id", editUser)
router.delete("/", deleteAllUsers)

export default router
