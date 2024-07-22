import Welcome from '@components/home/Welcome'
import FeaturedProductsContainer from '@components/home/featured-products/FeaturedProductsContainer'
import CarouselContainer from '@components/home/carousel/CarouselContainer'
import WhatWeOfferContainer from '@components/home/what-we-offer/WhatWeOfferContainer'

const App = () => {
  return (
    <>
      <Welcome />
      <FeaturedProductsContainer />
      <CarouselContainer />
      <WhatWeOfferContainer />
    </>
  )
}

export default App
