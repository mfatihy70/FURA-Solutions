import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import kablokanal from "../../assets/images/slides/kablokanal.png";
import kablolama from "../../assets/images/slides/kablolama.png";
import kablorekor from "../../assets/images/slides/kablorekor.png";
import trenkantar from "../../assets/images/slides/trenkantar.png";
import musterikablo from "../../assets/images/slides/müsterikabloc.png";
import "../../styles/Carousel.css";

const CarouselExample = () => {
  const { t } = useTranslation();

  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={kablokanal} className="carousel-image" alt="kablokanal" />
        </div>
        <Carousel.Caption>
          <h3>{t("carousel.cable_channel.title")}</h3>
          <p>{t("carousel.cable_channel.subtitle")}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={kablorekor} className="carousel-image" alt="kablorekor" />
        </div>
        <Carousel.Caption>
          <h3>{t("carousel.cable_gland.title")}</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={trenkantar} className="carousel-image" alt="trenkantar" />
        </div>
        <Carousel.Caption>
          <h3>{t("carousel.train_scale.title")}</h3>
          <p>{t("carousel.train_scale.subtitle")}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={kablolama} className="carousel-image" alt="kablolama" />
        </div>
        <Carousel.Caption>
          <h3>{t("carousel.cable_marking.title")}</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img
            src={musterikablo}
            className="carousel-image custom-width"
            alt="musterikablo"
          />
        </div>
        <Carousel.Caption>
          <h3>{t("carousel.custom_cable.title")}</h3>
          <p>{t("carousel.custom_cable.subtitle")}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselExample;
