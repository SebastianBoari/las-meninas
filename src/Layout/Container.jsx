import Background from './Background/index'
import BackgroundOrnament from './Ornament/BackgroundOrnament'

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <Background>
      <div className="max-w-screen-xl mx-auto min-w-[320px] w-full py-4 px-4">
        <BackgroundOrnament>{children}</BackgroundOrnament>
      </div>
    </Background>
  )
}

export default Container
