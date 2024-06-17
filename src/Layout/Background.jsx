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
