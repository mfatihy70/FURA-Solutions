import { useEffect, useState } from "react"
import { Carousel } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { fetchCarouselItems } from "@/utils/carousel"
import "@/styles/Carousel.css"

const CustomCarousel = () => {
  const { t } = useTranslation()
  const [carouselItems, setCarouselItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchCarouselItems(setCarouselItems, setLoading, setError)
  }, [])

  useEffect(() => {}, [carouselItems])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  // Map the carousel items to include the translated titles and subtitles
  const items = carouselItems.map((item) => ({
    ...item,
    title: t(item.title),
    subtitle: item.subtitle ? t(item.subtitle) : undefined,
  }))

  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index} interval={3000}>
          <div className="carousel-image-container">
            <img
              src={item.imageUrl}
              className="carousel-image"
              alt={item.title}
            />
          </div>
          <Carousel.Caption>
            <h3>{item.title}</h3>
            {item.subtitle && <p>{item.subtitle}</p>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CustomCarousel
