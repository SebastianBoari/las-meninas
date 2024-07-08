import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import Container from '@components/layout/Container'
import AdminPanel from '@components/admin/AdminPanel'

const Admin = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <AdminPanel />
        <Footer />
      </div>
    </Container>
  )
}

export default Admin
