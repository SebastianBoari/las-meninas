import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    zIndex: 1,
    opacity: 1,
  },
  exit: {
    zIndex: 0,
    opacity: 0,
  },
}

const Carousel = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.5 },
          }}
          className="carousel-img"
        />
      </AnimatePresence>
      <div
        className="absolute z-10 grid w-10 h-10 text-xl font-bold rounded-full cursor-pointer select-none next bg-blackened text-vanillaGray place-items-center drop-shadow-lg"
        onClick={() => paginate(1)}
      >
        {'‣'}
      </div>
      <div
        className="absolute z-10 grid w-10 h-10 text-xl font-bold rounded-full cursor-pointer select-none prev bg-blackened text-vanillaGray place-items-center drop-shadow-lg"
        onClick={() => paginate(-1)}
      >
        {'‣'}
      </div>
    </>
  )
}

export default Carousel
