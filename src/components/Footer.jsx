import TelephoneIcon from '../partials/icons/TelephoneIcon'
import InstagramIcon from '../partials/icons/InstagramIcon'
import LocationPointIcon from '../partials/icons/LocationPointIcon'

const Footer = () => {
  return (
    <>
      <div className="flex items-end justify-between my-32">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <TelephoneIcon width={'20px'} height={'20px'} color={'#ECE6DA'} />
            <p className="font-sans text-xs not-italic font-normal text-vanillaGray">
              +54-3446444333{' '}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <InstagramIcon width={'20px'} height={'20px'} color={'#ECE6DA'} />

            <p className="font-sans text-xs not-italic font-normal text-vanillaGray">
              @las-meninas
            </p>
          </div>

          <div className="flex items-center gap-2">
            <LocationPointIcon
              width={'24px'}
              height={'24px'}
              color={'#ECE6DA'}
            />
            <p className="font-sans text-xs not-italic font-normal text-vanillaGray">
              Calle 123 - Ciudad, Provincia.
            </p>
          </div>
        </div>
      </div>
      <div className="grid w-full my-8 place-items-center">
        <p className="font-sans text-xs font-normal text-vanillaGray">
          Developed by SebastianBoari
        </p>
      </div>
    </>
  )
}

export default Footer
