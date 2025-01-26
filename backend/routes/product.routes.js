import express from "express"
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
} from "../controllers/product.controller.js"

const router = express.Router()

router.get("/", getProducts)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)
router.delete("/", deleteAllProducts)

export default router
