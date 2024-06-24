import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'

import Welcome from '../components/Welcome'
import FeaturedProductsContainer from '../components/FeaturedProducts/FeaturedProductsContainer'
import CarouselContainer from '../components/Carousel/CarouselContainer'
import WhatWeOfferContainer from '../components/WhatWeOffer/WhatWeOfferContainer'

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Welcome />
      <FeaturedProductsContainer />
      <CarouselContainer />
      <WhatWeOfferContainer />
      <Actions />
      <Footer />
    </div>
  )
}

export default App
