import { NavLink, useLocation } from 'react-router-dom'
import OrnamentCrown from '../../../Layout/Ornament/partials/OrnamentCrown'
import OrnamentFooterRight from '../../../Layout/Ornament/partials/OrnamentFooterRight'
import OrnamentFooterLeft from '../../../Layout/Ornament/partials/OrnamentFooterLeft'

const NavLinkHome = () => {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <NavLink
        to="/"
        className="bg-[#26211E] text-[#FCEFBB] py-2 pl-6 pr-4 shadow-lg"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            {<OrnamentCrown width={'12'} height={'7'} />}
          </div>
          Inicio
          <div className="flex flex-row justify-between items-center gap-5">
            {<OrnamentFooterLeft width={'9'} height={'9'} />}
            {<OrnamentFooterRight width={'9'} height={'9'} />}
          </div>
        </div>
      </NavLink>
    )
  }

  return (
    <NavLink
      to="/"
      className="bg-[#403D2E] text-[#FCEFBB] py-4 px-8 rounded-l-full rounded-r-l"
    >
      Inicio
    </NavLink>
  )
}

export default NavLinkHome
