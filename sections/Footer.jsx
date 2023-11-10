import Image from "next/image"
import logo from '@/public/assets/goolluck_investments_logo.png'
const Footer = () => {
  return (
    <footer className='w-full bg-footer py-5'>
      <div className='container mx-auto'>
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>
      </div>
    </footer>
  )
}

export default Footer