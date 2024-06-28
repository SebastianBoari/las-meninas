import Crown from '../Partials/Ornaments/OrnamentCrown'
import FooterLeft from '../Partials/Ornaments/OrnamentFooterLeft'
import FooterCenter from '../Partials/Ornaments/OrnamentFooterCenter'
import FooterRight from '../Partials/Ornaments/OrnamentFooterRight'
import TopLeft from '../Partials/Ornaments/OrnamentTopLeft'
import TopRight from '../Partials/Ornaments/OrnamentTopRight'

const Container = ({ children }) => {
  return (
    <div className="w-full h-full background">
      <div className="w-full h-full background-glass">
        <div className="max-w-screen-xl mx-auto min-w-[320px] w-full py-4 px-4">
          <div>
            <div className="flex flex-row items-center justify-between">
              <TopLeft width={'30'} height={'54'} color={'#FCEFBB'} />
              <div className="flex flex-col items-center justify-center gap-2">
                <Crown width={'35'} height={'23'} color={'#FCEFBB'} />
                <img
                  className="w-16 h-16 rounded-full"
                  src="../assets/las-meninas-icon.png"
                  alt="Icono de Las Meninas: Casa de Antigüedades"
                />
                <div className="flex flex-row items-center justify-between gap-5">
                  <FooterLeft width={'28'} height={'28'} color={'#FCEFBB'} />
                  <FooterRight width={'28'} height={'28'} color={'#FCEFBB'} />
                </div>
              </div>
              <TopRight width={'30'} height={'54'} color={'#FCEFBB'} />
            </div>

            {children}

            <div className="flex flex-row items-center justify-between">
              <FooterLeft width={'30'} height={'30'} color={'#FCEFBB'} />
              <FooterCenter width={'35'} height={'65'} color={'#FCEFBB'} />
              <FooterRight width={'30'} height={'30'} color={'#FCEFBB'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
