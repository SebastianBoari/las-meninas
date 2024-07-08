import Container from '@components/layout/Container' // Background, glass and ornament
import Header from '@components/common/Header'
import Actions from '@components/common/Actions'
import Footer from '@components/common/Footer'
import Welcome from '@components/home/Welcome'
import FeaturedProductsContainer from '@components/home/featured-products/FeaturedProductsContainer'
import CarouselContainer from '@components/home/carousel/CarouselContainer'
import WhatWeOfferContainer from '@components/home/what-we-offer/WhatWeOfferContainer'

const App = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <Welcome />
        <FeaturedProductsContainer />
        <CarouselContainer />
        <WhatWeOfferContainer />
        <Actions />
        <Footer />
      </div>
    </Container>
  )
}

export default App
