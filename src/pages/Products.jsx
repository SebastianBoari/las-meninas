import Header from '@components/Common/Header'
import Actions from '@components/Common/Actions'
import Footer from '@components/Common/Footer'
import Container from '@components/Layout/Container' // Background, glass and ornament
import ProductsContainer from '@components/Products/ProductsContainer'

const Products = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <ProductsContainer />
        <Actions />
        <Footer />
      </div>
    </Container>
  )
}

export default Products
