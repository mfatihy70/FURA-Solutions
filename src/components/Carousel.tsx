import Carousel from "react-bootstrap/Carousel";
import kablokanal from "../assets/images/slides/kablokanal.png";
import kablolama from "../assets/images/slides/kablolama.png";
import kablorekor from "../assets/images/slides/kablorekor.png";
import trenkantar from "../assets/images/slides/trenkantar.png";
import "../styles/Carousel.css";

const CarouselExample = () => {
  return (
    <Carousel>
      <br />
      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={kablokanal} className="carousel-image" alt="kablokanal" />
        </div>
        <Carousel.Caption>
          <h3>Demiryolu standartlı kablo kanalları</h3>
          <p>Conduits, Fittings, Accessoires</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={kablorekor} className="carousel-image" alt="kablorekor" />
        </div>
        <Carousel.Caption>
          <h3>Demiryolu standartlı kablo rekorları</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={trenkantar} className="carousel-image" alt="trenkantar" />
        </div>
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-50 p-2">
            Portatif tren kantarları
          </h3>
          <p>EU standartlarına uygun</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div className="carousel-image-container">
          <img src={kablolama} className="carousel-image" alt="kablolama" />
        </div>
        <Carousel.Caption>
          <h3>Endüstriyel markalama ve kablo bağları</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselExample;
