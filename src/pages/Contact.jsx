import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'
import ContactMisc from '../components/ContactMisc'

const Contact = () => {
  return (
    <div className="w-full">
      <Navbar />

      <div className="grid mt-8 mb-16 place-items-center">
        <div className="grid grid-cols-2 place-items-center">
          <ContactForm />

          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col gap-2 p-4 rounded-md shadow-2xl bg-vanillaGray">
              <ContactMap />

              <div className="flex justify-between w-full">
                <div>
                  <p className="font-serif text-base not-italic font-normal text-blackened">
                    Lunes a Sábados
                  </p>

                  <p className="font-serif text-base not-italic font-normal text-blackened">
                    10:00hs a 13:00hs
                  </p>

                  <p className="font-serif text-base not-italic font-normal text-blackened">
                    16:30 a 19:30hs
                  </p>
                </div>
                <div>
                  <p className="font-serif text-base not-italic font-normal text-blackened max-w-[128px]">
                    Calle Ficticia 2976 - Nueva Ciudad, San Provincia.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ContactMisc />
            </div>
          </div>
        </div>
      </div>

      <Actions />

      <Footer />
    </div>
  )
}

export default Contact
