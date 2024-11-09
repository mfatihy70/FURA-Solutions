import React from "react";
import { Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "@/styles/Carousel.css";
import {
  cableChannel,
  cableGland,
  cableMarking,
  trainScale,
  customCable,
} from "@/assets/images/carousel/import";

const CustomCarousel: React.FC = () => {
  const { t } = useTranslation();

  const carouselItems = [
    {
      image: cableChannel,
      title: t("carousel.cableChannel.title"),
      subtitle: t("carousel.cableChannel.subtitle"),
      link: "https://www.flexa.de/home/EN_index_1000.html",
    },
    {
      image: cableGland,
      title: t("carousel.cableGland.title"),
      link: "https://www.kaiser-elektro.de/en_DE/products/cable-glands-industrial-products/",
    },
    {
      image: trainScale,
      title: t("carousel.trainScale.title"),
      subtitle: t("carousel.trainScale.subtitle"),
      link: "https://ivmtech.it/en/prodotti/powerve/",
    },
    {
      image: cableMarking,
      title: t("carousel.cableMarking.title"),
      link: "https://www.hellermanntyton.com/tr/urunler/tel-ve-kablo-i-saretleme-elemanlari/tlfx24wh/554-51000?query=554-51000&cat=554-51000",
    },
    {
      image: customCable,
      title: t("carousel.customCable.title"),
      subtitle: t("carousel.customCable.subtitle"),
    },
  ];

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
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
  );
};

export default CustomCarousel;
