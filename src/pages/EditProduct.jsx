import Header from '@components/Common/Header'
import Footer from '@components/Common/Footer'
import Container from '@components/Layout/Container'
import EditProductPanel from '@components/Admin/Product/EditProductPanel'

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
