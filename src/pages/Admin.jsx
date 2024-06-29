import Navbar from '@components/Common/Navbar'
import Footer from '@components/Common/Footer'
import AdminPanel from '@components/AdminPanel.jsx'

const Admin = () => {
  return (
    <div className="w-full">
      <Navbar />
      <AdminPanel />
      <Footer />
    </div>
  )
}

export default Admin
