import { useState } from 'react'
import { motion } from 'framer-motion'
import OrnamentCrown from '../partials/ornaments/OrnamentCrown'
import OrnamentTopLeft from '../partials/ornaments/OrnamentTopLeft'
import OrnamentTopRight from '../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../partials/ornaments/OrnamentFooterRight'
import FurnitureIcon from '../partials/icons/FurnitureIcon'
import ArtIcon from '../partials/icons/ArtIcon'
import LightningIcon from '../partials/icons/LightningIcon'

const imageMap = {
  dining:
    'https://www.woodbros.co.uk/wp-content/uploads/Range_OC_Aldeburgh.jpg',
  paintings:
    'https://th.bing.com/th/id/OIP.NSLeYfF2jpKH1biLSBMLzwHaFj?rs=1&pid=ImgDetMain',
  lighting:
    'https://i.pinimg.com/736x/cf/4b/3e/cf4b3ee413f99983efad660d7c656985.jpg',
}

const WhatWeOffer = () => {
  const [selectedImage, setSelectedImage] = useState(imageMap.dining)

  const handleImageChange = (imageKey) => {
    setSelectedImage(imageMap[imageKey])
  }

  return (
    <div className="grid grid-cols-2 mt-24">
      <div className="relative col-start-2">
        <figure className="absolute WhatWeOffer-figure h-[380px] w-[240px] rounded-md shadow-xl z-10">
          <motion.img
            key={selectedImage}
            className="object-cover h-[380px] w-[240px] rounded-md drop-shadow-2xl"
            src={selectedImage}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </figure>

        <div className="flex flex-col justify-between py-1.5 px-7  bg-vanillaGray max-w-[380px] rounded-md w-[380px] h-[480px] drop-shadow-2xl">
          <div className="flex justify-between">
            <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
            <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
            <OrnamentTopRight
              width={'18px'}
              height={'32px'}
              color={'#26211E'}
            />
          </div>

          <div className="flex flex-col items-center justify-between h-full gap-2 px-3 py-1">
            <div className="p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56">
              <h3 className="text-center">
                En <strong>Las Meninas</strong> puede encontrar una amplia gama
                de antigüedades.
              </h3>
            </div>

            <motion.div
              onClick={() => handleImageChange('dining')}
              whileHover={{ scale: 1.05 }}
              className={
                selectedImage === imageMap.dining
                  ? 'bg-militar p-2 rounded-md font-serif text-lg not-italic font-normal text-vanillaGray max-w-56 cursor-pointer shadow-xl transition duration-300'
                  : 'p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56 cursor-pointer transition duration-300'
              }
            >
              <div className="grid place-items-center">
                {selectedImage === imageMap.dining ? (
                  <FurnitureIcon
                    width={'24ox'}
                    height={'24px'}
                    color={'#ECE6DA'}
                  />
                ) : (
                  <FurnitureIcon
                    width={'24ox'}
                    height={'24px'}
                    color={'#26211E'}
                  />
                )}
              </div>
              <p className="text-center">
                Juegos de comedor, sillas, sillones, mesas y más.
              </p>
            </motion.div>

            <motion.div
              onClick={() => handleImageChange('paintings')}
              whileHover={{ scale: 1.05 }}
              className={
                selectedImage === imageMap.paintings
                  ? 'bg-militar p-2 rounded-md font-serif text-lg not-italic font-normal text-vanillaGray max-w-56 cursor-pointer shadow-xl transition duration-300'
                  : 'p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56 cursor-pointer transition duration-300'
              }
            >
              <div className="grid place-items-center">
                {selectedImage === imageMap.paintings ? (
                  <ArtIcon width={'24ox'} height={'24px'} color={'#ECE6DA'} />
                ) : (
                  <ArtIcon width={'24ox'} height={'24px'} color={'#26211E'} />
                )}
              </div>
              <p className="text-center">Cuadros, pinturas y marcos.</p>
            </motion.div>

            <motion.div
              onClick={() => handleImageChange('lighting')}
              whileHover={{ scale: 1.05 }}
              className={
                selectedImage === imageMap.lighting
                  ? 'bg-militar p-2 rounded-md font-serif text-lg not-italic font-normal text-vanillaGray max-w-56 cursor-pointer shadow-xl transition duration-300'
                  : 'p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56 cursor-pointer transition duration-300'
              }
            >
              <div className="grid place-items-center">
                {selectedImage === imageMap.lighting ? (
                  <LightningIcon
                    width={'24ox'}
                    height={'24px'}
                    color={'#ECE6DA'}
                  />
                ) : (
                  <LightningIcon
                    width={'24ox'}
                    height={'24px'}
                    color={'#26211E'}
                  />
                )}
              </div>
              <p className="text-center">
                Iluminación, faroles, arañas, lámparas, veladores, etc.
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <OrnamentFooterLeft
              width={'32px'}
              height={'32px'}
              color={'#26211E'}
            />
            <OrnamentFooterCenter
              width={'16px'}
              height={'32px'}
              color={'#26211E'}
            />
            <OrnamentFooterRight
              width={'32px'}
              height={'32px'}
              color={'#26211E'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer
