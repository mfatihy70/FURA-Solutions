import mongoose from "mongoose"

const carouselSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  text: { type: String },
})

export default mongoose.model("Carousel", carouselSchema)
