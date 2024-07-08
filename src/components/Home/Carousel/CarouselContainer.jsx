import { useState, useEffect } from 'react'

import { storage } from '@fb/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

import Carousel from '@components/common/Carousel'
import CarouselCard from '@components/home/carousel/CarouselCard'
import CarouselTitle from '@components/home/carousel/CarouselTitle'

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
    <div className="grid place-items-center splg:gap-16 spxs:gap-6 spxs:my-8 splg:my-32">
      <CarouselTitle />

      <div className="flex items-center justify-center gap-8 spxs:flex-col md:flex-row">
        <CarouselCard />

        <div className="rounded-md carousel-container bg-vanillaGray lg:w-[545px] h-[345px] relative grid place-items-center overflow-hidden shadow-2xl z-10 spxs:w-[280px]">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  )
}

export default CarouselContainer
