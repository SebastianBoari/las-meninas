import OrnamentTopLeft from '../../Partials/Ornaments/OrnamentTopLeft'
import OrnamentCrown from '../../Partials/Ornaments/OrnamentCrown'
import OrnamentTopRight from '../../Partials/Ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../../Partials/Ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../../Partials/Ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../../Partials/Ornaments/OrnamentFooterRight'

const CarouselCard = () => {
  return (
    <div className="flex flex-col xl:max-w-[340px] justify-between items-center bg-vanillaGray py-1.5 xl:px-7 spxs:px-2 rounded-md shadow-2xl spxs:max-w-[280px]">
      <div className="flex justify-between w-full">
        <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
        <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
        <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
      </div>

      <div className="w-full h-full p-1.5 flex flex-col justify-center xl:gap-8 xl:px-1 spxs:px-4 spxs:gap-4 ">
        <h2 className="w-full text-2xl not-italic font-primary text-blackened">
          Curiosidades
        </h2>
        <p className="text-xl font-normal font-primary text-blackened">
          Seguinos en nuestras redes sociales para descubrir nuestros artículos
          disponibles y ponete en contacto con nosotros si tenés alguna duda.
        </p>
        <a
          target="_blank"
          href="https://www.instagram.com/lasmeninas_curiosidades/"
          className="self-end px-6 py-3 text-base not-italic font-normal transition duration-300 rounded-full font-primary bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla"
        >
          Instagram
        </a>
      </div>

      <div className="flex items-center justify-between w-full">
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

export default CarouselCard
