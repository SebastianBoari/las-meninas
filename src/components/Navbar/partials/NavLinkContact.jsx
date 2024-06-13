import { NavLink, useLocation } from 'react-router-dom'

const NavLinkContact = () => {
  const location = useLocation()

  if (location.pathname === '/contacto') {
    return (
      <NavLink
        to="/contacto"
        className="bg-[#26211E] text-[#FCEFBB] py-2 px-4 rounded-r-[24px] rounded-l shadow-lg"
      >
        Contacto
      </NavLink>
    )
  }

  return (
    <NavLink
      to="/contacto"
      className="bg-[#403D2E] text-[#FCEFBB] py-2 px-4 rounded-full"
    >
      Contacto
    </NavLink>
  )
}

export default NavLinkContact
