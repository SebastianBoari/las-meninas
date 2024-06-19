import { motion } from 'framer-motion'

const FeaturedProducts = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.figure
        whileHover={{ scale: 1.05 }}
        className="relative z-10 drop-shadow-lg"
      >
        <img
          className="w-[260px] h-[232px] object-cover rounded-md drop-shadow-2xl"
          src={product.thumbnails[0]}
          alt={product.description}
        />
      </motion.figure>

      <div className="bg-vanillaGray max-w-[240px] drop-shadow-lg rounded-b-lg p-2 flex flex-col -mt-4 z-0">
        <p className="px-2 py-2 font-serif not-italic font-normal text-m text-blackened">
          {product.description}
        </p>
        <button className="self-center px-4 py-1.5 font-serif not-italic font-normal rounded-sm text-base text-vanillaGray bg-militar hover:bg-blackened transition duration-300">
          Ver más
        </button>
      </div>
    </div>
  )
}

export default FeaturedProducts