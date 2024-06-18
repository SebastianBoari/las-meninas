import Crown from '../partials/ornaments/OrnamentCrown'
import FooterLeft from '../partials/ornaments/OrnamentFooterLeft'
import FooterCenter from '../partials/ornaments/OrnamentFooterCenter'
import FooterRight from '../partials/ornaments/OrnamentFooterRight'
import TopLeft from '../partials/ornaments/OrnamentTopLeft'
import TopRight from '../partials/ornaments/OrnamentTopRight'

const BackgroundOrnament = ({ children }) => {
  return (
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
  )
}

export default BackgroundOrnament
