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
        <div className="col-span-2 row-span-2 bg-blue-700">
          <Image className="" alt="hat" src={hat} unoptimized />
        </div>
        <div className="bg-red-600">
          <Image className="" alt="hat" src={shirt} unoptimized />
        </div>
        <div className="bg-yellow-400">
          <Image className="" alt="hat" src={jacket} unoptimized />
        </div>
      </div>
      <div className="flex w-screen overflow-x-scroll bg-white">
        {[...Array(10)].map((_) => (
          <Image
            className=""
            alt="jacket"
            src={jacket}
            width={'500px'}
            height={'500px'}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 py-24">
        <div className="flex items-center">
          <h3 className="text-2xl text-white">
            Productos personalizados para tu marca
          </h3>
        </div>
        <div className="col-span-2">
          <p className="text-white">
            Cupcake ipsum dolor sit amet lemon drops pastry cotton candy. Sweet
            carrot cake macaroon bonbon croissant fruitcake jujubes macaroon oat
            cake. Soufflé bonbon caramels jelly beans. Tiramisu sweet roll
            cheesecake pie carrot cake.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="row-start-1  bg-blue-700">
          <Image className="" alt="hat" src={hat} unoptimized />
        </div>
        <div className="row-start-2 bg-red-600">
          <Image className="" alt="hat" src={shirt} unoptimized />
        </div>
        <div className="col-span-2 row-span-2 bg-yellow-400">
          <Image className="" alt="hat" src={jacket} unoptimized />
        </div>
      </div>
      <div className="py-32"></div>
      <div className="border border-t-gray-900 py-32">
        <div className="border-b-gray-100 px-32 py-32"></div>
      </div>
    </div>
  )
}

export default HomePage
// pointless comment to push
