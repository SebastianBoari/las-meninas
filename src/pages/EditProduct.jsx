import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import Container from '@components/layout/Container'
import EditProductPanel from '@components/admin/product/EditProductPanel'

const EditProduct = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <EditProductPanel />
        <Footer />
      </div>
    </Container>
  )
}

export default EditProduct
