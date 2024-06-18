import MoneyIcon from '../partials/icons/MoneyIcon'
import SellIcon from '../partials/icons/SellIcon'
import LocationIcon from '../partials/icons/LocationIcon'

const Actions = () => {
  return (
    <div className="flex items-center justify-between mt-32">
      <div className="flex flex-col items-center w-64 gap-8">
        <div>
          <MoneyIcon width={'42px'} height={'42px'} color={'#ECE6DA'} />
        </div>
        <p className="font-serif not-italic font-normal text-center text-vanillaGray">
          Vendé tus antigüedades que ya no uses, valoramos tus pertenencias.
        </p>
      </div>

      <div className="flex flex-col items-center w-64 gap-8">
        <div>
          <SellIcon width={'42px'} height={'42px'} color={'#ECE6DA'} />
        </div>
        <p className="font-serif not-italic font-normal text-center text-vanillaGray">
          Venta de antigüedades originales o restauradas igual a nuevo
        </p>
      </div>

      <div className="flex flex-col items-center w-64 gap-8">
        <div>
          <LocationIcon width={'42px'} height={'42px'} color={'#ECE6DA'} />
        </div>
        <p className="font-serif not-italic font-normal text-center text-vanillaGray">
          Visita nuestro local para ver todo lo que tenemos disponible
        </p>
      </div>
    </div>
  )
}

export default Actions
