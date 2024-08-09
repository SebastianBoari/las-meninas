import { motion } from 'framer-motion'
import { truncateText } from '@utils'

import { NavLink } from 'react-router-dom'

import OrnamentFooterLeft from '@components/partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterRight from '@components/partials/ornaments/OrnamentFooterRight'
import OrnamentTopLeft from '@components/partials/ornaments/OrnamentTopLeft'
import OrnamentTopRight from '@components/partials/ornaments/OrnamentTopRight'
import OrnamentCrown from '@components/partials/ornaments/OrnamentCrown'

const ProductsCard = ({
  id,
  title,
  description,
  thumbnails,
  isActive,
  setActiveCard,
}) => {
  return (
    <div className="grid place-items-center w-fit">
      <div
        className="flex flex-col items-center"
        onMouseEnter={() => setActiveCard(id)}
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
            src={typeof thumbnails !== 'object' ? '#' : thumbnails[0]}
            alt={description}
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

          <div className="p-2">
            <h3 className="text-lg not-italic font-bold font-primary text-blackened">
              {truncateText(title, 80)}
            </h3>
            <p className="text-base not-italic font-normal font-primary text-blackened">
              {truncateText(description, 120)}
            </p>
          </div>

          <div className="flex items-end justify-between">
            <OrnamentFooterLeft
              width={'24px'}
              height={'24px'}
              color={'#26211E'}
            />
            <NavLink
              to={`/producto/${id}`}
              className={
                isActive
                  ? 'self-center px-4 py-1.5 font-primary not-italic font-normal rounded-md text-base  bg-blackened text-vanilla transition duration-300 drop-shadow'
                  : 'self-center px-4 py-1.5 font-primary not-italic font-normal rounded-md text-base text-vanillaGray bg-militar hover:bg-blackened hover:text-vanilla transition duration-300'
              }
            >
              Ver más
            </NavLink>
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

export default ProductsCard
