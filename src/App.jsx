import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import FeaturedProductsContainer from './containers/FeaturedProductsContainer'
import CarouselContainer from './containers/CarouselContainer'

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Welcome />

      <FeaturedProductsContainer />

      <CarouselContainer />
      <Footer />
    </div>
  )
}

export default App
