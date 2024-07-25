const ArrowIcon = ({ width, height, color }) => {
  const fillColor = color ? color : 'currentColor'

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 1024 1024"
      >
        <path
          fill={fillColor}
          d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
        />
      </svg>
    </div>
  )
}

export default ArrowIcon
