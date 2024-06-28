import TelephoneIcon from '../Partials/Icons/TelephoneIcon'
import InstagramIcon from '../Partials/Icons/InstagramIcon'
import LocationPointIcon from '../Partials/Icons/LocationPointIcon'

import Crown from '../Partials/Ornaments/OrnamentCrown'
import FooterLeft from '../Partials/Ornaments/OrnamentFooterLeft'
import FooterRight from '../Partials/Ornaments/OrnamentFooterRight'
import TopLeft from '../Partials/Ornaments/OrnamentTopLeft'
import TopRight from '../Partials/Ornaments/OrnamentTopRight'

const Footer = () => {
  return (
    <>
      <div className="grid place-items-center md:my-32 spxs:my-8">
        <div className="flex items-center w-full spxs:flex-col spxs:gap-8 sm:flex-row sm:justify-center md:justify-between md:max-w-[680px] lg:max-w-[780px] xl:max-w-[1024px] 2xl:max-w-full">
          <div className="flex flex-col gap-4 spxs:items-center sm:items-start">
            <div className="flex items-center gap-2">
              <TelephoneIcon width={'20px'} height={'20px'} color={'#ECE6DA'} />
              <p className="text-sm font-secondary text-vanillaGray">
                +54-3446444333{' '}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <InstagramIcon width={'20px'} height={'20px'} color={'#ECE6DA'} />

              <p className="text-sm font-secondary text-vanillaGray">
                @las-meninas
              </p>
            </div>

            <div className="flex items-center gap-0.5">
              <LocationPointIcon
                width={'24px'}
                height={'24px'}
                color={'#ECE6DA'}
              />
              <p className="text-sm font-secondary text-vanillaGray">
                Calle 123 - Ciudad, Provincia.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 p-6 rounded-md bg-vanillaGray">
            <div className="flex flex-row items-center justify-between w-fit">
              <TopLeft width={'18'} height={'32'} color={'#26211E'} />
              <div className="flex flex-col items-center justify-center gap-2">
                <Crown width={'32'} height={'20'} color={'#26211E'} />
                <img
                  className="w-12 h-12 rounded-full"
                  src="../assets/las-meninas-icon.png"
                  alt="Icono de Las Meninas: Casa de Antigüedades"
                />
                <div className="flex flex-row items-center justify-between gap-5">
                  <FooterLeft width={'24'} height={'24'} color={'#26211E'} />
                  <FooterRight width={'24'} height={'24'} color={'#26211E'} />
                </div>
              </div>
              <TopRight width={'18'} height={'32'} color={'#26211E'} />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-normal font-secondary text-blackened">
                Horarios:
              </h3>
              <p className="text-sm font-normal font-secondary text-blackened">
                Lunes a Sábados
              </p>
              <p className="text-sm font-normal font-secondary text-blackened">
                10:00hs a 13:00hs
              </p>
              <p className="text-sm font-normal font-secondary text-blackened">
                16:30 a 19:30hs
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full spxs:my-2 splg:my-4 md:my-8 place-items-center">
        <p className="font-secondary spxs:text-[8px] md:text-xs font-normal text-vanillaGray">
          Developed by SebastianBoari
        </p>
      </div>
    </>
  )
}

export default Footer
