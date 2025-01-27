
const Navbar = () => {
  return (
    <>
    <nav>
    <div className='relative bg-[#121e27]'>
     <div className='name text-xl'>Tanishka Gupta</div>
        <ul className='flex items-center justify-evenly align-middle  w-full h-13 text-sm font-semibold'>
        <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/">home</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/about">about</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/project">project</a></li>
          <li className='border-b-4 border-[#e74c3c] hover:opacity-85'><a href="/contact">contact</a></li>
        </ul>
    </div>
      </nav>
    </>
  )
}

export default Navbar