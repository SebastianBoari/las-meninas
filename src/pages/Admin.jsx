import Header from '@components/Common/Header'
import Footer from '@components/Common/Footer'
import Container from '@components/Layout/Container'
import AdminPanel from '@components/Admin/AdminPanel.jsx'

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
