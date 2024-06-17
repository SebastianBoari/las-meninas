import { NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="h-lvh w-full">
      <Navbar />

      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <p className="font-serif font-normal not-italic text-[42px] text-[#ECE6DA] max-w-[480px] w-full h-auto drop-shadow-lg">
            <strong>Casa de Antigüedades</strong>, muebles, iluminación, arte y{' '}
            <strong>eso especial que buscas</strong> para tu hogar.
          </p>

          <div className="flex gap-6 items-center self-end">
            <p className="font-sans font-normal not-italic text-xs text-[#ECE6DA]">
              ¿Tienes antigüedades que quieras vender?{' '}
              <NavLink
                className="text-[#ECE6DA]/60 hover:text-[#26211E] transition duration-300"
                to="/contacto"
              >
                Mándanos un mensaje
              </NavLink>
            </p>
            <NavLink
              className="font-serif font-normal not-italic text-base text-[#ECE6DA] px-6 py-3 rounded-full bg-[#403D2E] drop-shadow hover:shadow-lg hover:bg-[#26211E] transition duration-300"
              to="/productos"
            >
              Ver catálogo
            </NavLink>
          </div>
        </div>

        <figure className="w-[580px] h-[545px] flex items-center justify-center">
          <img
            className="max-w-[440px] w-full h-auto"
            src="https://firebasestorage.googleapis.com/v0/b/las-meninas-d7387.appspot.com/o/fornitures-compress.png?alt=media&token=0bbe1c64-059f-473f-bdb1-1b33fa4ed95d"
            alt=""
            srcSet=""
          />
        </figure>
      </div>
      <Footer />
    </div>
  )
}

export default App
