import MoneyIcon from '../partials/icons/MoneyIcon'
import SellIcon from '../partials/icons/SellIcon'
import LocationIcon from '../partials/icons/LocationIcon'

const Actions = () => {
  return (
    <div className="flex items-center justify-between my-32 spxs:flex-col spxs:gap-16 sm:gap-0 sm:flex-row">
      <div className="flex flex-col items-center w-64 gap-8">
        <div>
          <MoneyIcon width={'42px'} height={'42px'} color={'#ECE6DA'} />
        </div>
        <p className="not-italic font-light text-center font-secondary text-vanillaGray">
          Vendé tus antigüedades que ya no uses, valoramos tus pertenencias.
        </p>
      </div>

      <div className="flex flex-col items-center w-64 gap-8">
        <div>
          <SellIcon width={'42px'} height={'42px'} color={'#ECE6DA'} />
        </div>
        <p className="not-italic font-light text-center font-secondary text-vanillaGray">
          Venta de antigüedades originales o restauradas igual a nuevo
        </p>
      </div>

      <div className="flex flex-col items-center w-64 gap-8">
        <div>
          <LocationIcon width={'42px'} height={'42px'} color={'#ECE6DA'} />
        </div>
        <p className="font-light text-center font-secondary text-vanillaGray">
          Visita nuestro local para ver todo lo que tenemos disponible
        </p>
      </div>
    </div>
  )
}

export default Actions
