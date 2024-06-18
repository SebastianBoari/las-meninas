import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import FeaturedProductsContainer from './containers/FeaturedProductsContainer'
import CarouselContainer from './containers/CarouselContainer'
import WhatWeOffer from './components/WhatWeOffer'
import Actions from './components/Actions.jsx'

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
