import React from "react"
import { Carousel } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { carouselItems } from "@/data/carousel" // Import the carousel data
import "@/styles/Carousel.css"

const CustomCarousel: React.FC = () => {
  const { t } = useTranslation()

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
          <a
            href={item.link}
            className="carousel-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="carousel-image-container">
              <img
                src={item.image}
                className="carousel-image"
                alt={item.title}
              />
            </div>
            <Carousel.Caption>
              <h3>{item.title}</h3>
              {item.subtitle && <p>{item.subtitle}</p>}
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CustomCarousel
