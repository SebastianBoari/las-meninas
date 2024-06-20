import { motion } from 'framer-motion'

const WhatWeOfferFigure = ({ selectedImage }) => {
  return (
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
  )
}

export default WhatWeOfferFigure
