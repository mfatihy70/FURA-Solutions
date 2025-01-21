import express from "express"
import Carousel from "../models/carousel.model.js"

const router = express.Router()

// GET request to fetch all carousel items
router.get("/", async (req, res) => {
  try {
    const carousels = await Carousel.find()
    res.status(200).json(carousels)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST request to create a new carousel item
router.post("/", async (req, res) => {
  const { imageUrl, text } = req.body

  const newCarousel = new Carousel({
    imageUrl,
    text,
  })

  try {
    const savedCarousel = await newCarousel.save()
    res.status(201).json(savedCarousel)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
