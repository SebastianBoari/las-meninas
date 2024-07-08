import Header from '@components/common/Header'
import Actions from '@components/common/Actions'
import Footer from '@components/common/Footer'
import Container from '@components/layout/Container' // Background, glass and ornament
import ProductsContainer from '@components/products/ProductsContainer'

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
