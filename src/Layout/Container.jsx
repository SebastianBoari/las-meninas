import Background from './Background'
import BackgroundOrnament from './BackgroundOrnament'

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
