import { motion } from 'framer-motion'

import OrnamentCrown from '../../partials/ornaments/OrnamentCrown'
import OrnamentTopLeft from '../../partials/ornaments/OrnamentTopLeft'
import OrnamentTopRight from '../../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../../partials/ornaments/OrnamentFooterRight'

import FurnitureIcon from '../../partials/icons/FurnitureIcon'
import ArtIcon from '../../partials/icons/ArtIcon'
import LightningIcon from '../../partials/icons/LightningIcon'

const WhatWeOfferCard = ({ images, selectedImage, setSelectedImage }) => {
  const handleImageChange = (imageKey) => {
    setSelectedImage(images[imageKey])
  }

  return (
    <div className="flex flex-col justify-between py-1.5 px-7  bg-vanillaGray max-w-[380px] rounded-md w-[380px] h-[480px] shadow-2xl">
      <div className="flex justify-between">
        <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
        <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
        <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
      </div>

      <div className="flex flex-col items-center justify-between h-full gap-2 px-3 py-1">
        <div className="p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56">
          <h3 className="text-center">
            En <strong>Las Meninas</strong> puede encontrar una amplia gama de
            antigüedades.
          </h3>
        </div>

        <motion.div
          onClick={() => handleImageChange('dining')}
          whileHover={{ scale: 1.05 }}
          className={
            selectedImage === images.dining
              ? 'bg-militar p-2 rounded-md font-serif text-lg not-italic font-normal text-vanillaGray max-w-56 cursor-pointer shadow-xl transition duration-300'
              : 'p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56 cursor-pointer transition duration-300'
          }
        >
          <div className="grid place-items-center">
            {selectedImage === images.dining ? (
              <FurnitureIcon width={'24px'} height={'24px'} color={'#ECE6DA'} />
            ) : (
              <FurnitureIcon width={'24px'} height={'24px'} color={'#26211E'} />
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
            selectedImage === images.paintings
              ? 'bg-militar p-2 rounded-md font-serif text-lg not-italic font-normal text-vanillaGray max-w-56 cursor-pointer shadow-xl transition duration-300'
              : 'p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56 cursor-pointer transition duration-300'
          }
        >
          <div className="grid place-items-center">
            {selectedImage === images.paintings ? (
              <ArtIcon width={'24px'} height={'24px'} color={'#ECE6DA'} />
            ) : (
              <ArtIcon width={'24px'} height={'24px'} color={'#26211E'} />
            )}
          </div>
          <p className="text-center">Cuadros, pinturas y marcos.</p>
        </motion.div>

        <motion.div
          onClick={() => handleImageChange('lighting')}
          whileHover={{ scale: 1.05 }}
          className={
            selectedImage === images.lighting
              ? 'bg-militar p-2 rounded-md font-serif text-lg not-italic font-normal text-vanillaGray max-w-56 cursor-pointer shadow-xl transition duration-300'
              : 'p-2 font-serif text-lg not-italic font-normal text-center rounded-md text-blackened max-w-56 cursor-pointer transition duration-300'
          }
        >
          <div className="grid place-items-center">
            {selectedImage === images.lighting ? (
              <LightningIcon width={'24px'} height={'24px'} color={'#ECE6DA'} />
            ) : (
              <LightningIcon width={'24px'} height={'24px'} color={'#26211E'} />
            )}
          </div>
          <p className="text-center">
            Iluminación, faroles, arañas, lámparas, veladores, etc.
          </p>
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <OrnamentFooterLeft width={'32px'} height={'32px'} color={'#26211E'} />
        <OrnamentFooterCenter
          width={'16px'}
          height={'32px'}
          color={'#26211E'}
        />
        <OrnamentFooterRight width={'32px'} height={'32px'} color={'#26211E'} />
      </div>
    </div>
  )
}

export default WhatWeOfferCard
