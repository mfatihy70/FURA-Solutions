import Carousel from "./Carousel"
import Section from "./Section"
import Partners from "../partners/Partners"
import ProductCatalog from "../products/ProductCatalog"

const Home = () => {
  return (
    <>
      <Carousel />
      <Section />
      <ProductCatalog showDetails={false} />
      <Partners />
    </>
  )
}

export default Home
