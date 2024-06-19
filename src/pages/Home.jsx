import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import WhatWeOffer from '../components/WhatWeOffer'
import Actions from '../components/Actions'

import FeaturedProductsContainer from '../components/FeaturedProducts/FeaturedProductsContainer'
import CarouselContainer from '../components/Carousel/CarouselContainer'

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Welcome />

      <FeaturedProductsContainer />

      <CarouselContainer />

      <WhatWeOffer />

      <Actions />

      <Footer />
    </div>
  )
}

export default App
