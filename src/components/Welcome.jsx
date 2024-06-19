import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-serif text-3xl not-italic text-vanillaGray drop-shadow-lg">
          Las Meninas
        </h1>
        <p className="font-serif font-normal not-italic text-5xl text-vanillaGray max-w-[540px] w-full h-auto drop-shadow-lg">
          <strong>Casa de Antigüedades</strong>, muebles, iluminación, arte y{' '}
          <strong>eso especial que buscas</strong> para tu hogar.
        </p>

        <div className="flex items-center self-end gap-6">
          <p className="font-sans text-xs not-italic font-normal text-vanillaGray">
            ¿Tienes antigüedades que quieras vender?{' '}
            <NavLink
              className="transition duration-300 text-vanillaGray/60 hover:text-blackened"
              to="/contacto"
            >
              Mándanos un mensaje
            </NavLink>
          </p>
          <NavLink
            className="px-6 py-3 font-serif text-base not-italic font-normal transition duration-300 rounded-full text-vanillaGray bg-militar drop-shadow hover:shadow-lg hover:bg-blackened hover:text-vanilla"
            to="/productos"
          >
            Ver catálogo
          </NavLink>
        </div>
      </div>

      <figure className="max-w-[440px] grid place-items-center">
        <img
          className="object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/las-meninas-d7387.appspot.com/o/fornitures-compress.png?alt=media&token=0bbe1c64-059f-473f-bdb1-1b33fa4ed95d"
          alt=""
          srcSet=""
        />
      </figure>
    </div>
  )
}

export default Welcome
