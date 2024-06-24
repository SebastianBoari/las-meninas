import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'

import ProductsContainer from '../components/Products/ProductsContainer'

const Products = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ProductsContainer />
      <Actions />
      <Footer />
    </div>
  )
}

export default Products
