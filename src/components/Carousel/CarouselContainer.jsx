import { useState, useEffect } from 'react'

import { storage } from '../../config/firebase.config.js'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

import Carousel from './Carousel.jsx'
import CarouselCard from './CarouselCard.jsx'
import CarouselTitle from './CarouselTitle.jsx'
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
      <CarouselTitle />

      <div className="flex justify-center items-center relative h-[390px]">
        <div className="relative">
          <CarouselCard />

          <div className="rounded-md carousel-container bg-vanillaGray w-[545px] h-[345px] relative grid place-items-center overflow-hidden shadow-2xl z-10">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselContainer
