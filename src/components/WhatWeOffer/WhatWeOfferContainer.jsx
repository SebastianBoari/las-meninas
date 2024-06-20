import WhatWeOffer from './WhatWeOffer'
import { useState } from 'react'

const WhatWeOfferContainer = () => {
  const imageMap = {
    dining:
      'https://www.woodbros.co.uk/wp-content/uploads/Range_OC_Aldeburgh.jpg',
    paintings:
      'https://th.bing.com/th/id/OIP.NSLeYfF2jpKH1biLSBMLzwHaFj?rs=1&pid=ImgDetMain',
    lighting:
      'https://i.pinimg.com/736x/cf/4b/3e/cf4b3ee413f99983efad660d7c656985.jpg',
  }

  const [selectedImage, setSelectedImage] = useState(imageMap.dining)

  return (
    <div>
      <WhatWeOffer
        images={imageMap}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </div>
  )
}

export default WhatWeOfferContainer
