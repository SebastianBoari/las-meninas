import { NavLink, useLocation } from 'react-router-dom'

const NavLinkProducts = () => {
  const location = useLocation()

  if (location.pathname === '/productos') {
    return (
      <NavLink
        to="/productos"
        className="bg-[#26211E] text-[#FCEFBB] py-2 px-4 rounded shadow-lg"
      >
        Productos
      </NavLink>
    )
  }

  return (
    <NavLink
      to="/productos"
      className="bg-[#403D2E] text-[#FCEFBB] py-2 px-4 rounded-full"
    >
      Productos
    </NavLink>
  )
}

export default NavLinkProducts
