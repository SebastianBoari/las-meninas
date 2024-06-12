import './index.css'

// eslint-disable-next-line react/prop-types
const BackgroundGlass = ({ children }) => {
  return (
    <div 
        className="
        background-glass
        h-lvh
        w-full
        ">
        {children}
    </div>
  )
}

export default BackgroundGlass