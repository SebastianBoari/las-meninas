const LocationIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 12H8V8H40V12ZM26 31C26 33.28 26.86 35.72 28 38V40H8V28H6V24L8 14H40L41.4 21C40 20.36 38.56 20 37 20C31 20 26 25 26 31ZM24 28H12V36H24V28ZM44 31C44 36.2 37 44 37 44C37 44 30 36.2 30 31C30 27.2 33.2 24 37 24C40.8 24 44 27.2 44 31ZM39.4 31.2C39.4 30 38.2 28.8 37 28.8C35.8 28.8 34.6 29.8 34.6 31.2C34.6 32.4 35.6 33.6 37 33.6C38.4 33.6 39.6 32.4 39.4 31.2Z"
        fill={color}
      />
    </svg>
  )
}

export default LocationIcon
