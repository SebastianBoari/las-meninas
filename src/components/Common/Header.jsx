import Navbar from '@components/Common/Navbar'
import SessionButton from '@components/SessionButton'

const Header = () => {
  return (
    <div className="flex items-center justify-center w-full spxs:mt-8 splg:mt-16">
      <Navbar />

      <div className="relative h-full">
        <div className="absolute top-[-16px] left-[16px]">
          <SessionButton />
        </div>
      </div>
    </div>
  )
}

export default Header
