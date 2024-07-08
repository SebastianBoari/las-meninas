import WhatWeOfferCard from '@components/home/what-we-offer/WhatWeOfferCard'
import WhatWeOfferFigure from '@components/home/what-we-offer/WhatWeOfferFigure'

const WhatWeOffer = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="grid sm:my-32 spxs:my-16 place-items-center">
      <div className="relative">
        <WhatWeOfferFigure selectedImage={selectedImage} />

        <WhatWeOfferCard
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  )
}

export default WhatWeOffer
