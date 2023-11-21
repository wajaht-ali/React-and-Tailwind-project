/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    // For Mobile View
    <div className="Navbar w-full flex flex-row justify-between items-center py-4 px-5 md:shadow-sm md:shadow-gray-500">
      <div className="logo w-full md:w-auto">
        <h1 className="p-3 text-3xl w-full font-bold text-[#00df9a] hover:cursor-pointer hover:text-white">React</h1>
      </div>
      <div className="block cursor-pointer p-3 hover:bg-slate-500 hover:rounded active:bg-slate-500 active:rounde ease-in-out duration-300 md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className="hidden md:block md:w-[50%]">
        <ul className="h-full flex flex-row justify-around items-center uppercase">
          <li className="p-3 hover:bg-[#00df9a] hover:rounded">Home</li>
          <li className="p-3 hover:bg-[#00df9a] hover:rounded">About</li>
          <li className="p-3 hover:bg-[#00df9a] hover:rounded">Work</li>
          <li className="p-3 hover:bg-[#00df9a] hover:rounded">Services</li>
          <li className="p-3 hover:bg-[#00df9a] hover:rounded">Contact</li>
        </ul>
      </div>
      {/* Navbar for Mobile view */}
      <div className="md:hidden">

        <ul className={!nav ? "fixed top-100 right-0 w-[50%] rounded h-full border-r flex flex-col place-items-center text-center mt-10 bg-gray-700 ease-in-out duration-500" : 'fixed left-[-100%]'}>
          <li className="p-3 w-[60%] hover:border-b hover:border-b-gray-500 hover:rounded">Home</li>
          <li className="p-3 w-[60%] hover:border-b hover:border-b-gray-500 hover:rounded">About</li>
          <li className="p-3 w-[60%] hover:border-b hover:border-b-gray-500 hover:rounded">Work</li>
          <li className="p-3 w-[60%] hover:border-b hover:border-b-gray-500 hover:rounded">Services</li>
          <li className="p-3 w-[60%] hover:border-b hover:border-b-gray-500 hover:rounded">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar