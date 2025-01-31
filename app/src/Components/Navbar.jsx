import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
 const [openNav, setOprnNav] = useState(true);

  const toggleNav = () => {
    setOprnNav(!openNav);
  }


  return (
    <>
    <nav>
    <div className='relative bg-[#121e27]'>
     <div className='name md:text-xl py-4'>Tanishka Gupta</div>
      
       <div>
      
          <button className="absolute right-10 cursor-pointer py-4 text-white md:hidden top-1 text-lg hover:text-gray-300" onClick={toggleNav}><RxHamburgerMenu /></button>
           {openNav ? (
            <>
           <div className="w-full h-44 md:h-12 bg-[#121e27] text-white">
           <ul  className='absolute left-[50%] md:static space-y-3 text-sm py-2 top-16 md:w-full md:flex md:py-2 md:items-center md:justify-evenly'>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/">home</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/about">about</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/project">project</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/contact">contact</a></li>
        </ul> 
           </div>
           </>) : ""}

       </div>
    </div>
      </nav>

    </>
  )
}

export default Navbar