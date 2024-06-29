import { motion } from 'framer-motion'

import OrnamentFooterLeft from '@components/Partials/Ornaments/OrnamentFooterLeft'
import OrnamentFooterRight from '@components/Partials/Ornaments/OrnamentFooterRight'
import OrnamentTopLeft from '@components/Partials/Ornaments/OrnamentTopLeft'
import OrnamentTopRight from '@components/Partials/Ornaments/OrnamentTopRight'
import OrnamentCrown from '@components/Partials/Ornaments/OrnamentCrown'

const FeaturedProductsCard = ({ product, isActive, setActiveCard }) => {
  return (
    <div>
      <div
        className="flex flex-col items-center"
        onMouseEnter={() => setActiveCard(product.id)}
        onMouseLeave={() => setActiveCard(null)}
      >
        <motion.figure
          className={isActive ? 'z-10 drop-shadow-lg' : 'drop-shadow-lg'}
          animate={
            ({ scale: isActive ? 1.05 : 1 }, { translateY: isActive ? 24 : 0 })
          }
          transition={{ duration: 0.3 }}
        >
          <img
            className="w-[260px] h-[240px] object-cover rounded-md drop-shadow-2xl"
            src={product.thumbnails[0]}
            alt={product.description}
          />
        </motion.figure>

        <div
          className={
            isActive
              ? 'bg-vanillaGray max-w-[240px] rounded-lg p-2 flex flex-col -mt-4 z-0 shadow-xl transition duration-300'
              : 'bg-vanillaGray max-w-[240px] drop-shadow-lg rounded-lg p-2 flex flex-col -mt-4 z-0 transition duration-300'
          }
        >
          <div className="flex justify-between">
            <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
            <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
            <OrnamentTopRight
              width={'18px'}
              height={'32px'}
              color={'#26211E'}
            />
          </div>

          <p className="px-2 py-2 not-italic font-normal font-primary text-m text-blackened">
            {product.description}
          </p>

          <div className="flex items-end justify-between">
            <OrnamentFooterLeft
              width={'24px'}
              height={'24px'}
              color={'#26211E'}
            />
            <button
              className={
                isActive
                  ? 'self-center px-4 py-1.5 font-primary not-italic font-normal rounded-md text-base  bg-blackened text-vanilla transition duration-300 drop-shadow'
                  : 'self-center px-4 py-1.5 font-primary not-italic font-normal rounded-md text-base text-vanillaGray bg-militar hover:bg-blackened hover:text-vanilla transition duration-300'
              }
            >
              Ver más
            </button>
            <OrnamentFooterRight
              width={'24px'}
              height={'24px'}
              color={'#26211E'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProductsCard
