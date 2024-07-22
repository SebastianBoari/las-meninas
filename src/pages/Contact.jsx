import ContactForm from '@components/contact/ContactForm'
import ContactMap from '@components/contact/ContactMap'
import ContactMisc from '@components/contact/ContactMisc'

const Contact = () => {
  return (
    <div className="grid mt-12 mb-16 place-items-center">
      <div className="lg:grid lg:grid-cols-2 place-items-center spxs:flex spxs:flex-col spxs:items-center spxs:gap-4">
        <ContactForm />

        <div className="flex flex-col items-center justify-between h-full spxs:gap-4">
          <div className="flex flex-col gap-2 p-3 rounded-md shadow-2xl bg-vanillaGray">
            <ContactMap />

            <div className="flex justify-between w-full">
              <div className="p-2 bg-[#F5F5F5] rounded-md">
                <p className="text-sm not-italic font-light font-secondary text-blackened">
                  Lunes a Sábados
                </p>

                <p className="text-sm not-italic font-light font-secondary text-blackened">
                  10:00hs a 13:00hs
                </p>

                <p className="text-sm not-italic font-light font-secondary text-blackened">
                  16:30 a 19:30hs
                </p>
              </div>
              <div className="p-2 bg-[#F5F5F5] rounded-md">
                <p className="font-secondary text-sm not-italic font-light text-blackened max-w-[128px]">
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
  )
}

export default Contact
