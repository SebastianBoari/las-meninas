import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import FeaturedProductsContainer from '../components/FeaturedProducts/FeaturedProductsContainer.jsx'
import CarouselContainer from '../components/Carousel/CarouselContainer.jsx'
import WhatWeOffer from '../components/WhatWeOffer'
import Actions from '../components/Actions.jsx'

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Welcome />

      <CarouselContainer />

      <FeaturedProductsContainer />

      <WhatWeOffer />

      <Actions />

      <Footer />
    </div>
  )
}

export default App
