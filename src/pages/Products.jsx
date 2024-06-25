import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'
import Container from '../layout/Container' // Background, glass and ornament
import ProductsContainer from '../components/Products/ProductsContainer'

const Products = () => {
  return (
    <Container>
      <div className="w-full">
        <Navbar />
        <ProductsContainer />
        <Actions />
        <Footer />
      </div>
    </Container>
  )
}

export default Products
