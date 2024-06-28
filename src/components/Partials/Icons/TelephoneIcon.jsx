const TelephoneIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.4246 9.00201C6.27313 9.85054 7.22773 10.54 8.24596 11.0597L9.88998 9.41567C10.1021 9.20354 10.4044 9.1452 10.6643 9.23536C11.4439 9.49522 12.25 9.63311 13.0614 9.67023C13.247 9.66493 13.4379 9.73917 13.5705 9.87176C13.7296 10.0309 13.7985 10.2271 13.7985 10.418L13.7985 13.0484C13.7977 13.2452 13.7196 13.4337 13.5811 13.5735C13.4326 13.722 13.2417 13.7962 13.0508 13.7962C9.89529 13.7166 6.77164 12.4704 4.36394 10.0627C1.95625 7.65498 0.709971 4.53133 0.630421 1.37587C0.630421 1.18495 0.704667 0.99403 0.853159 0.845538C0.996348 0.702349 1.18727 0.628103 1.37819 0.628103L4.00862 0.628103C4.19954 0.628103 4.39576 0.697046 4.55486 0.856145C4.68832 0.994042 4.76255 1.17867 4.76169 1.37057C4.79351 2.17667 4.9314 2.98277 5.19126 3.76235C5.23678 3.89534 5.24401 4.03845 5.21213 4.17535C5.18025 4.31225 5.11054 4.43744 5.01095 4.53664L3.36692 6.18066C3.88665 7.19889 4.57608 8.15349 5.4246 9.00201Z"
        fill={color}
      />
    </svg>
  )
}

export default TelephoneIcon