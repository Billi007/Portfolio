import React from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <>
    <div className='bg-white '>
    <h1 className='relative text-3xl  p-5 right-[29%] text-black font-extrabold'>My Skills</h1>
       <div className='flex flex-col md:flex-row gap-16 justify-center items-center py-10'>

       <div>
        <img 
        className='rounded-xl w-[200px] '
        src="https://images.pexels.com/photos/19065036/pexels-photo-19065036/free-photo-of-anis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="profile" />
       </div>


       <div className='flex flex-wrap gap-1 md:w-xl text-white w-lg px-5'>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27] '>Javascript</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27] '>Typescript</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27]'>React</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27] '>Next.js</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm  font-semibold bg-[#121e27]'>Node.js</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>MongoDB</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>Firebase</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>Git & Github</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>TailwindCSS</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>HTML</button>
        <button className='md:py-1 md:px-3 px-2 py-0.5 text-sm font-semibold bg-[#121e27]'>CSS</button>

          <div className=' text-slate-800 mt-5 space-y-3 flex flex-col items-start'>
          <h1 className='font-bold'>I love building stuff 📱</h1>
          <p className='text-left text-sm md:text-lg leading-6'>I started playing with computers when I was 11 years-old. Since then
             I have been tinkering with all sorts of technologies that in some way or
              another led me to work on music, photography, sound engineering, electric engineering, automation,
               video production, feature film post-production, VR games, and 3D sound.</p>

         <Link 
         to='/about'
         className='text-[#e94026] font-semibold hover:opacity-90'>
         Keep reading my bio
         </Link>
          </div>

           </div>
    </div>
    </div>
    </>
  )
}

export default Skills