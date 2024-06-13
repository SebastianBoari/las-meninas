import Crown from './partials/OrnamentCrown'
import FooterLeft from './partials/OrnamentFooterLeft'
import FooterCenter from './partials/OrnamentFooterCenter.jsx'
import FooterRight from './partials/OrnamentFooterRight'
import TopLeft from './partials/OrnamentTopLeft'
import TopRight from './partials/OrnamentTopRight'

// eslint-disable-next-line react/prop-types
const index = ({ children }) => {
  return (
    <div>
        <div className='flex flex-row justify-between items-center'>
          <TopLeft/>

          <div className="flex flex-col items-center justify-center gap-2">
            <Crown width={"35"} height={"23"}/>
            
            <img className="w-16 h-16 rounded-full" src="../assets/las-meninas-icon.png" alt="Icono de Las Meninas: Casa de Antigüedades"/>
            
            <div className='flex flex-row justify-between items-center gap-5'>
              <FooterLeft width={"28"} height={"28"}/>
              <FooterRight width={"28"} height={"28"}/>
            </div>
          </div>

          <TopRight/>
        </div>

        {children}
        
        <div className='flex flex-row justify-between items-center'>
          <FooterLeft width={"30"} height={"30"}/>
          <FooterCenter width={"35"} height={"65"}/>
          <FooterRight width={"30"} height={"30"}/>
        </div>
    </div>
  )
}

export default index