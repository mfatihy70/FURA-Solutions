import express from "express"
import {
  getCarouselItems,
  getCarouselItemById,
  createCarouselItem,
  updateCarouselItem,
  deleteCarouselItemById,
  deleteAllCarouselItems,
} from "../controllers/carousel.controller.js"

const router = express.Router()

router.get("/", getCarouselItems)
router.get("/:id", getCarouselItemById)
router.post("/", createCarouselItem)
router.put("/:id", updateCarouselItem)
router.delete("/:id", deleteCarouselItemById)
router.delete("/", deleteAllCarouselItems)

export default router
