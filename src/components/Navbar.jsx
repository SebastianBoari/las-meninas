import NavbarButton from './partials/NavbarButton.jsx'

const Navbar = () => {
  return (
    <div>
      <NavbarButton text={"Inicio"} href={"/"}/>
      <NavbarButton text={"Productos"} href={"/productos"}/>
      <NavbarButton text={"Contacto"} href={"/contacto"}/>
    </div>
  )
}

export default Navbar