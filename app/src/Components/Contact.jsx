import {Link} from 'react-router-dom'
import { GiCoffeeCup } from "react-icons/gi";

const Contact = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-[10%] mt-10 py-[8%]'>
      <div className='space-y-6 text-left'>
      <h1 className='text-[3.8rem]  text-[#121e27]'>Let's have a chat</h1>
      <p
      className='text-[#ff5c49] font-bold'>guptatanishka2008@gmail.com</p>
       {/* <button className=' text-xm py-2 cursor-pointer px-5 bg-[#f1543b] hover:bg-[#e74c3c] font-semibold'>
        <a href='guptatanishka2008@gmail.com'>
        Get in touch
        </a>
       </button> */}
       <button className="px-6 py-2 font-medium bg-[#e9614d] text-white w-fit transition-all duration-200
        shadow-[7px_7px_0px_black] border-2 border-black hover:bg-[#f1543b] cursor-pointer hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]">
        Get in touch
      </button>
      </div>

       <div>
        <GiCoffeeCup className='text-8xl text-[#f1543b] cursor-pointer animate-pulse' />
       </div>
    </div>
    </>
  )
}

export default Contact