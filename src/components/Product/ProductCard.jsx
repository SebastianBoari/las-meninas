import Carousel from '@components/Common/Carousel'

import OrnamentFooterLeft from '@components/Partials/Ornaments/OrnamentFooterLeft'
import OrnamentFooterRight from '@components/Partials/Ornaments/OrnamentFooterRight'
import OrnamentTopLeft from '@components/Partials/Ornaments/OrnamentTopLeft'
import OrnamentTopRight from '@components/Partials/Ornaments/OrnamentTopRight'
import OrnamentCrown from '@components/Partials/Ornaments/OrnamentCrown'
import OrnamentFooterCenter from '@components/Partials/Ornaments/OrnamentFooterCenter'

const ProductCard = ({
  title,
  description,
  currency,
  price,
  quantity,
  thumbnails,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-4">
      <article className="p-2 rounded-md bg-vanillaGray max-w-[545px] min-h-[345px] flex flex-col justify-between shadow-2xl">
        <div className="flex justify-between">
          <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
          <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
          <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
        </div>

        <div className="flex flex-col justify-between min-h-[220px] gap-3 px-4">
          <h1 className="text-2xl font-primary">{title}</h1>
          <p className="text-xl font-primary">{description}</p>
          <p className="text-xl font-primary">
            Cantidad:
            {quantity
              ? ` ${quantity} unidades disponibles`
              : ' Única unidad disponible'}
          </p>
          <p className="text-xl font-primary">
            {price
              ? `${currency ? 'USD' : 'ARS'}$${price}`
              : 'Consultar precio'}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <OrnamentFooterLeft
            width={'24px'}
            height={'24px'}
            color={'#26211E'}
          />

          <OrnamentFooterCenter width={'18px'} color={'#26211E'} />

          <OrnamentFooterRight
            width={'24px'}
            height={'24px'}
            color={'#26211E'}
          />
        </div>
      </article>

      <div className="rounded-md carousel-container bg-vanillaGray lg:w-[545px] h-[345px] relative grid place-items-center overflow-hidden shadow-2xl z-10 spxs:w-[280px]">
        <Carousel images={thumbnails} />
      </div>
    </div>
  )
}

export default ProductCard
