const CarouselCard = () => {
  return (
    <div className="flex flex-col w-[340px] h-[385px] justify-center items-center gap-8 bg-vanillaGray p-8 rounded-md absolute carousel-card shadow-2xl">
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
  )
}

export default CarouselCard
