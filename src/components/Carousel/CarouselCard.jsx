import OrnamentTopLeft from '../../partials/ornaments/OrnamentTopLeft'
import OrnamentCrown from '../../partials/ornaments/OrnamentCrown'
import OrnamentTopRight from '../../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../../partials/ornaments/OrnamentFooterRight'

const CarouselCard = () => {
  return (
    <div className="flex flex-col max-w-[340px] justify-between items-center bg-vanillaGray py-1.5 px-7 rounded-md shadow-2xl">
      <div className="flex justify-between w-full">
        <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
        <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
        <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
      </div>

      <div className="w-full h-full p-1.5 flex flex-col justify-center gap-8">
        <h2 className="w-full font-serif text-2xl not-italic text-blackened">
          Curiosidades
        </h2>
        <p className="font-serif text-xl font-normal text-blackened">
          Seguinos en nuestras redes sociales para descubrir nuestros artículos
          disponibles y ponete en contacto con nosotros si tenés alguna duda.
        </p>
        <a
          target="_blank"
          href="https://www.instagram.com/lasmeninas_curiosidades/"
          className="self-end px-6 py-3 font-serif text-base not-italic font-normal transition duration-300 rounded-full bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla"
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
