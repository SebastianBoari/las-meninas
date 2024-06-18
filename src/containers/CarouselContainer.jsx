import { useState, useEffect } from 'react'
import { storage } from '../config/firebase.config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import Carousel from '../components/Carousel'

const CarouselContainer = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const carouselFolderRef = ref(storage, 'carousel')
        const carouselFolderSnapshot = await listAll(carouselFolderRef)

        const imageUrls = await Promise.all(
          carouselFolderSnapshot.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef)
            return url
          })
        )

        setImages(imageUrls)
      } catch (error) {
        console.error('Error obteniendo las imágenes del carousel:', error)
      }
    }

    fetchCarouselImages()
  }, [])

  return (
    <div className="grid gap-16 my-32 place-items-center">
      <div className="grid place-items-center">
        <h2 className="font-serif text-4xl font-normal text-vanillaGray">
          Galería
        </h2>
      </div>

      <div className="flex justify-center items-center relative h-[390px]">
        <div className="relative">
          <div className="flex flex-col w-[340px] h-[385px] justify-center items-center gap-8 bg-vanillaGray p-8 rounded-md absolute carousel-card shadow-2xl">
            <h2 className="w-full font-serif text-2xl not-italic text-blackened">
              Curiosidades
            </h2>
            <p className="font-serif text-xl font-normal text-blackened">
              Seguinos en nuestras redes sociales para descubrir nuestros
              artículos disponibles y ponete en contacto con nosotros si tenés
              alguna duda.
            </p>
            <a
              target="_blank"
              href="https://www.instagram.com/lasmeninas_curiosidades/"
              className="self-end px-6 py-3 font-serif text-base not-italic font-normal transition duration-300 rounded-full bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla"
            >
              Instagram
            </a>
          </div>

          <div className="rounded-md carousel-container bg-vanillaGray w-[545px] h-[345px] relative grid place-items-center overflow-hidden shadow-2xl z-10">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselContainer
