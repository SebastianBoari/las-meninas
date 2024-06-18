import OrnamentCrown from '../partials/ornaments/OrnamentCrown'
import OrnamentTopLeft from '../partials/ornaments/OrnamentTopLeft'
import OrnamentTopRight from '../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../partials/ornaments/OrnamentFooterRight'

const WhatWeOffer = () => {
  return (
    <div className="flex flex-col justify-between p-2 mt-16 bg-vanillaGray max-w-[380px] rounded-md">
      <div className="flex items-center justify-between">
        <OrnamentTopLeft width={'32px'} height={'32px'} color={'#26211E'} />
        <OrnamentCrown width={'32px'} height={'32px'} color={'#26211E'} />
        <OrnamentTopRight width={'32px'} height={'32px'} color={'#26211E'} />
      </div>
      <div>ASDASDASDASD</div>
      <div className="flex items-center justify-between">
        <OrnamentFooterLeft width={'32px'} height={'32px'} color={'#26211E'} />
        <OrnamentFooterCenter
          width={'32px'}
          height={'32px'}
          color={'#26211E'}
        />
        <OrnamentFooterRight width={'32px'} height={'32px'} color={'#26211E'} />
      </div>
    </div>
  )
}

export default WhatWeOffer
