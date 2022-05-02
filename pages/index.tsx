import Image from 'next/image'
import { FC } from 'react'
import Navbar from '../components/navbar'
import hat from '../assets/images/hat.png'
import jacket from '../assets/images/jacket.png'
import shirt from '../assets/images/shirt.png'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="grid grid-cols-3 grid-rows-2">
        <div className=" col-span-2 row-span-2 bg-blue-700">
          <Image className="" alt="hat" src={hat} unoptimized />
        </div>
        <div className="bg-red-700">
          <Image className="" alt="hat" src={shirt} unoptimized />
        </div>
        <div className="bg-yellow-400">
          <Image className="" alt="hat" src={jacket} unoptimized />
        </div>
        <div className="flex flex-nowrap bg-white">
          <Image className="" alt="jacket" src={jacket} unoptimized />
          <Image className="" alt="jacket" src={jacket} unoptimized />
          <Image className="" alt="jacket" src={jacket} unoptimized />
          <Image className="" alt="jacket" src={jacket} unoptimized />
          <Image className="" alt="jacket" src={jacket} unoptimized />
          <Image className="" alt="jacket" src={jacket} unoptimized />
        </div>
      </div>
    </div>
  )
}

export default HomePage
// pointless comment to push
