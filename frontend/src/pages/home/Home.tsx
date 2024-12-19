import Carousel from "./Carousel"
import Section from "./Section"
import Partners from "../partners/Partners"
import ProductCatalog from "../products/ProductCatalog"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <>
      <Carousel />
      <Section />
      <ProductCatalog showDetails={false} />
      <Partners />
      <br />
      <Footer />
    </>
  )
}

export default Home
