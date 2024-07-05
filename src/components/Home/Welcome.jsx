import { NavLink } from 'react-router-dom'

const Welcome = async () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8 spxs:flex-col md:flex-row">
      <div className="flex flex-col gap-4 splg:max-w-[320px] spxs:max-w-[280px] xl:max-w-[540px]">
        <h1 className="not-italic font-primary lg:text-3xl text-vanillaGray drop-shadow-lg spxs:text-2xl">
          Las Meninas
        </h1>
        <p className="font-primary font-normal not-italic xl:text-5xl lg:text-3xl text-vanillaGray sm:max-w-[440px] w-full h-auto drop-shadow-lg spxs:text-2xl">
          <strong>Casa de Antigüedades</strong>, muebles, iluminación, arte y{' '}
          <strong>eso especial que buscas</strong> para tu hogar.
        </p>

        <div className="flex w-full gap-6 xl:items-center xl:self-end spxs:flex-col spxs:self-start spxs:items-start xl:flex-row">
          <div className="w-full xl:w-fit spxs:flex spxs:flex-col xl:flex-row xl:gap-1">
            <p className="text-xs not-italic font-normal font-secondary text-vanillaGray">
              ¿Tienes antigüedades que quieras vender?{' '}
            </p>
            <NavLink
              className="text-xs not-italic font-normal transition duration-300 font-secondary text-vanillaGray/60 hover:text-blackened"
              to="/contacto"
            >
              Mándanos un mensaje
            </NavLink>
          </div>
          <NavLink
            className="px-6 py-3 text-base not-italic font-normal transition duration-300 rounded-full font-primary md:self-end text-vanillaGray bg-militar drop-shadow hover:shadow-lg hover:bg-blackened hover:text-vanilla"
            to="/productos"
          >
            Ver catálogo
          </NavLink>
        </div>
      </div>

      <figure className="md:max-w-[320px] xl:max-w-[440px] grid place-items-center spxs:max-w-[280px] lg:max-w-[380px]">
        <img
          className="object-cover xl:min-w-[440px] xl:min-h-[513px]"
          src="https://firebasestorage.googleapis.com/v0/b/las-meninas-d7387.appspot.com/o/fornitures-compress.png?alt=media&token=0bbe1c64-059f-473f-bdb1-1b33fa4ed95d"
          alt="Conjunto variado de muebles"
        />
      </figure>
    </div>
  )
}

export default Welcome
