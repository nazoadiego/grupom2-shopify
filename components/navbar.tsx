import { FC } from 'react'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
  <div className="bg-black w-screen h-14 flex">
    <svg xmlns="file:///Users/Gonzalo/Downloads/avatar-svgrepo-com.svg" viewBox="0 0 841.9 595.3">
      <circle cx="420.9" cy="296.5" r="45.7"/>
    </svg>
    <ul className= "font-roboto flex  gap-4  text-white justify-start pl-20 py-4">
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </ul>
  </div>
  )
}

export default Navbar
