import React from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
  return (
    <>
    <div className='bg-white '>
    <h1 className='relative text-3xl px-5 right-[28%] text-black font-extrabold pt-4'>My Skills</h1>
       <div className='flex gap-10 justify-center items-center py-10'>

       <div>
        <img 
        className='rounded-xl w-[180px] '
        src="https://images.pexels.com/photos/19065036/pexels-photo-19065036/free-photo-of-anis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="profile" />
       </div>


       <div className='flex flex-wrap gap-1 w-xl'>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>Javascript</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>Typescript</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>React</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>Next.js</button>
        <button className='py-1 px-3 text-sm  font-semibold bg-[#121e27] text-white'>Node.js</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>MongoDB</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>Firebase</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>Git & Github</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>TailwindCSS</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>HTML</button>
        <button className='py-1 px-3 text-sm font-semibold bg-[#121e27] text-white'>CSS</button>

          <div className='text-slate-800 mt-5 space-y-3 flex flex-col items-start'>
          <h1 className='font-bold'>I love building stuff 📱</h1>
          <p className='text-left text-sm leading-6'>I started playing with computers when I was 11 years-old. Since then
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