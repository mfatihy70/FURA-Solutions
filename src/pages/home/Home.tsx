import Carousel from "./Carousel";
import Section from "./Section";
import Partners from "../partners/Partners";
import Catalog from "../products/Catalog";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Carousel />
      <Section />
      <Catalog />
      <Partners />
      <br />
      <Footer />
    </>
  );
};

export default Home;
