import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
const Contact = () => {
  return (
    <div className="w-full">
      <Navbar />

      <div className="bg-vanillaGray">
        <ContactForm />
      </div>

      <Actions />

      <Footer />
    </div>
  )
}

export default Contact
