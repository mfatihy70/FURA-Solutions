import express from "express"
import Partner from "../models/partner.model.js"

const router = express.Router()

// GET request to fetch all partners
router.get("/partners", async (req, res) => {
  try {
    const partners = await Partner.find()
    res.status(200).json(partners)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST request to create a new partner
router.post("/partners", async (req, res) => {
  const { imageUrl, link } = req.body

  const newPartner = new Partner({
    imageUrl,
    link,
  })

  try {
    const savedPartner = await newPartner.save()
    res.status(201).json(savedPartner)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
