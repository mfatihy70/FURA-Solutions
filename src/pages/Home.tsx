import Carousel from "../components/Carousel";
import Section from "../components/Section";
import Social from "../components/Social";
import Footer from "../components/Footer";
import PartnersChild from "./partners/PartnersChild";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Section />
      <PartnersChild />
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
