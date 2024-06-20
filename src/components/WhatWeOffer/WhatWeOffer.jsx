import WhatWeOfferCard from './WhatWeOfferCard'
import WhatWeOfferFigure from './WhatWeOfferFigure'

const WhatWeOffer = ({ images, selectedImage, setSelectedImage }) => {
  return (
    <div className="grid grid-cols-2 my-32">
      <div className="relative col-start-2">
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
