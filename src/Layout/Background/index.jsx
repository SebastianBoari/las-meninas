import './index.css'

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  return (
    <div className="background h-full w-full">
      <div className="background-glass h-full w-full">
        <div className="">{children}</div>
      </div>
    </div>
  )
}

export default Background
