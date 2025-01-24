import Skills from './Skills'
import Projects from './Projects'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Home = () => {
  return (
   <>

   <div className='flex flex-col justify-center items-center my-48'>
   
     <div className='text-[3.5rem] font-normal text-left leading-20 tracking-tight mb-16'> Hi, I’m Tanishka | <span className='border-b-8 border-[#e74c3c]'>Software</span>
      <br /> 
      <span className='border-b-8 border-[#e74c3c]'> Engineer</span>
 
    <div className='text-[#ed6955] flex gap-3 text-3xl my-10 cursor-pointer'>
      <a href='https://github.com/Billi007' className='hover:text-gray-400'><FaGithub /></a>
     <a href='https://www.linkedin.com/feed' className='hover:text-gray-400'> <FaLinkedin /></a>
     <a href='https://x.com/Tanisha1175' className='hover:text-gray-400'> <FaTwitter /></a>
     <a href='guptatanishka2008@gmail.com' className='hover:text-gray-400'> <MdEmail /></a>
     </div>
    <p className='text-lg max-w-sm text-left font-thin  tracking-normal'>I love exploring and creating 🚀 I’m a lifelong learner 🎓 
    and I might have a thing for traditional Neapolitan Pizza 🍕</p>
      </div>


    </div>
      <Skills/>
     <Projects/>
 
   </>
  )
}

export default Home