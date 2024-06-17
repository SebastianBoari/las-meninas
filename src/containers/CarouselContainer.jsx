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
    <div className="grid gap-8 mt-16 place-items-center">
      <div className="grid place-items-center">
        <h2 className="font-serif text-4xl font-normal text-vanillaGray">
          Galería
        </h2>
      </div>

      <div className="flex justify-center gap-32">
        <div className="rounded-md carousel-container bg-vanillaGray w-[545px] h-[345px] relative grid place-items-center overflow-hidden drop-shadow-lg">
          <Carousel images={images} />
        </div>

        <div className="flex flex-col w-[390px] gap-16">
          <p className="mt-8 font-serif text-2xl font-normal text-vanillaGray">
            Visita nuestras redes sociales para saber los artículos disponibles
            y ponte en contacto con nosotros por cualquier duda.
          </p>
          <a
            target="_blank"
            href="https://www.instagram.com/lasmeninas_curiosidades/"
            className="self-end px-6 py-3 font-serif text-base not-italic font-normal transition duration-300 rounded-full bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default CarouselContainer
