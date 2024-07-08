import { useState } from 'react'

import WhatWeOffer from '@components/home/what-we-offer/WhatWeOffer'

const WhatWeOfferContainer = () => {
  const imageMap = {
    dining:
      'https://th.bing.com/th/id/R.bceb2e125777e14c4cc6d46c3acc9f71?rik=Fx9cV8MOze6f9Q&pid=ImgRaw&r=0',
    paintings:
      'https://th.bing.com/th/id/OIP.NSLeYfF2jpKH1biLSBMLzwHaFj?rs=1&pid=ImgDetMain',
    lighting:
      'https://i.pinimg.com/736x/cf/4b/3e/cf4b3ee413f99983efad660d7c656985.jpg',
  } // TODO [PRODUCTION]: Put on storage

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
