import Container from '@components/Layout/Container' // Background, glass and ornament
import Header from '@components/Common/Header'
import Actions from '@components/Common/Actions'
import Footer from '@components/Common/Footer'
import Welcome from '@components/Home/Welcome'
import FeaturedProductsContainer from '@components/Home/FeaturedProducts/FeaturedProductsContainer'
import CarouselContainer from '@components/Home/Carousel/CarouselContainer'
import WhatWeOfferContainer from '@components/Home/WhatWeOffer/WhatWeOfferContainer'

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
