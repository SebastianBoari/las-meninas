import NavLinkHome from './partials/NavLinkHome'
import NavLinkProducts from './partials/NavLinkProducts'
import NavLinkContact from './partials/NavLinkContact'

import './index.css'

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center mt-2">
      <div className="navbar bg-[#403D2E] rounded-full w-fit p-2 flex space-x-2 shadow-2xl">
        {NavLinkHome()}

        {NavLinkProducts()}

        {NavLinkContact()}
      </div>
    </div>
  )
}

export default Navbar
