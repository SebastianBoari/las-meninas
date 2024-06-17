import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import FeaturedProductsContainer from './containers/FeaturedProductsContainer'

const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Welcome />

      <FeaturedProductsContainer />

      <Footer />
    </div>
  )
}

export default App
